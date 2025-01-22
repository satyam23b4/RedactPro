from flask import Flask, request, jsonify, send_from_directory, url_for
import os
from redact import redact_metadata, redact_faces, redact_text_in_file, redact_audio
from flask_cors import CORS
import logging

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = './uploads'
REDACTED_FOLDER = './redacted'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(REDACTED_FOLDER, exist_ok=True)

@app.route('/upload/<redaction_type>', methods=['POST'])
def upload_file(redaction_type):
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    # Process the file based on the redaction type
    if redaction_type == 'metadata':
        redacted_filename = redact_metadata(filepath)
    elif redaction_type == 'face':
        redacted_filename = redact_faces(filepath)
    elif redaction_type == 'file_text':
        redacted_filename = redact_text_in_file(filepath, file.filename)
    elif redaction_type == 'audio':
        redacted_filename = redact_audio(filepath, file.filename.replace('.wav', '_redacted.wav'))
    else:
        return jsonify({'error': 'Invalid redaction type'}), 400

    # Check if the redacted filename is valid
    if redacted_filename is None:
        return jsonify({'error': 'Error processing the file for redaction or unsupported file type'}), 500

    # Create the download URL for the redacted file
    download_url = url_for('download_file', filename=redacted_filename, _external=True)
    return jsonify({
        'message': 'File redacted successfully',
        'redactedFileUrl': download_url
    })

@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    try:
        return send_from_directory(REDACTED_FOLDER, filename, as_attachment=True)
    except FileNotFoundError:
        return jsonify({"error": "File not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5001)
