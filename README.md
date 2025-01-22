# RedactPro

RedactPro is an advanced AI-driven redaction application designed to securely redact sensitive information from various file formats, including documents, images, PDFs, and audio. The app employs cutting-edge OCR and NLP technologies to identify and mask sensitive information efficiently, offering unparalleled privacy and user control.

## Features

- **AI-Based Text Redaction**: Automatically detect and redact sensitive information like names, locations, and other confidential data in PDFs and documents.
- **Image Redaction**: OCR-powered processing for identifying and masking sensitive text in images within PDF files.
- **Metadata Redaction**: Remove hidden metadata from files to ensure complete data privacy.
- **Audio Redaction**: Convert sensitive parts of audio recordings into noise.
- **Multi-Format Input**: Accepts documents, PDFs, and images for comprehensive redaction.
- **Dark Themed UI**: Visually appealing interface with animations, tints, and hues for an enhanced user experience.
- **Interactive Redaction Options**: Choose from metadata, face, or text redaction via a popup on the homepage.
- **Real-Time Loading Indicator**: Displays a loading animation while processing files.

## Technologies Used

- **Frontend**: React, CSS for dark-themed UI and animations
- **Backend**: Node.js, Express
- **AI/ML**: Natural Language Processing (NLP), Optical Character Recognition (OCR)
- **File Handling**: Python libraries like PyPDF2, pdfplumber for PDF processing
- **Audio Processing**: Libraries like pydub for redacting sensitive audio information

## Installation

Follow these steps to run RedactPro locally:

1. Clone the repository:
   ```bash
   [git clone https://github.com/your-username/RedactPro.git](https://github.com/shvm2/RedactPro.git)
   cd RedactPro
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

4. Start the backend server:
   ```bash
   cd ../backend
   npm start
   ```

5. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Visit the homepage to explore the app's features.
2. Click on the **"Try It Now"** button to open the redaction popup.
3. Select the type of redaction: metadata, face, or file text.
4. Upload your file and initiate the redaction process.
5. Download the processed file with sensitive information securely redacted.

## Screenshots

![Homepage](assets/images/homepage.png)
![Redaction Popup](assets/images/popup.png)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push:
   ```bash
   git commit -m "Added feature-name"
   git push origin feature-name
   ```
4. Open a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, feel free to reach out:

- **Portfolio**: [Shivam Singh](https://byte-shell.vercel.app/)
- **GitHub**: [shvm2](https://github.com/shvm2)
