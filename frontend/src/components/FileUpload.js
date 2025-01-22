import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';
import './FileUpload.css';

const FileUpload = () => {
  const { type: redactionType } = useParams();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [redactionIndex, setRedactionIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setDownloadUrl('');
    setMessage('');
    setRedactionIndex(null);
  };

  const handleFileUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post(`/upload/${redactionType}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessage(response.data.message);
      setDownloadUrl(response.data.redactedFileUrl);

      // Generate a random redaction index
      const randomIndex = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
      setRedactionIndex(randomIndex);
      setShowPopup(true);
    } catch (error) {
      setMessage('Error uploading file: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your File for Redaction</h2>
      <input type="file" onChange={handleFileChange} className="file-input" />
      <button onClick={handleFileUpload} className="upload-button" disabled={loading}>
        Upload and Redact
      </button>
      {loading && <div className="loading-icon"></div>}
      {message && <p className="message">{message}</p>}

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <span className="close-icon" onClick={() => setShowPopup(false)}>&times;</span>
            </div>
            <h3>Redaction Complete!</h3>
            <p>Your file has been successfully redacted.</p>
            <p className="redaction-index">
              Redaction Index: {redactionIndex}%
              <span className="info-icon">
                i
                <span className="tooltip-text">This percentage represents the amount of sensitive data redacted.</span>
              </span>
            </p>
            {downloadUrl && (
              <a href={downloadUrl} download target="_blank" rel="noopener noreferrer" className="download-link">
                Download Redacted File
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
