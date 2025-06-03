# QR Code Generator

A simple and stylish web application to generate QR codes from text or URLs, with various size options. This project is implemented using HTML, CSS, and JavaScript, and uses an external API for QR code generation.

## Features

- Generate QR codes for any text or URL.
- Choose from multiple QR code sizes (100x100 to 1000x1000).
- Download the generated QR code as a PNG image.
- Responsive and modern user interface.

## Getting Started

### Prerequisites

You only need a modern web browser to use this project.

### Usage

1. **Clone the repository:**

   ```bash
   git clone https://github.com/prabasajee/QR-generator.git
   cd QR-generator
   ```

2. **Open the app:**

   - Open `QR.html` in your browser.

3. **How it works:**

   - Enter your text or URL in the input box.
   - Select the desired size.
   - Click the “Generate QR Code” button.
   - Click “Download QR Code” to save the image.

## File Structure

- `QR.html` — Main HTML file containing the app UI and JavaScript logic.
- `style_Qr.css` — Stylesheet for the app layout and appearance.

## How It Works

This app uses the [goqr.me API](https://goqr.me/api/) to generate QR codes. When you enter text or a URL and select a size, it sends a request to the API and displays the resulting QR code image. You can then download the image.

## Example

![Screenshot](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=github.com/prabasajee/QR-generator)

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Made with ❤️ by [prabasajee](https://github.com/prabasajee)*
