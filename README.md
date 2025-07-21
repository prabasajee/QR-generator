# QR Code Generator

A modern, feature-rich web application to generate customizable QR codes from text, URLs, emails, phone numbers, and more. Built with vanilla HTML, CSS, and JavaScript with a focus on user experience and accessibility.

## ✨ Features

### Core Functionality
- 📱 **Universal QR Generation** - Create QR codes for text, URLs, emails, phone numbers, WiFi credentials, and more
- 🎨 **Full Customization** - Choose colors, sizes, error correction levels, and output formats
- 📥 **Multiple Download Formats** - PNG, JPG, GIF, and SVG support
- 📤 **Native Sharing** - Share QR codes directly from supported browsers
- ⚡ **Real-time Generation** - Auto-generate QR codes as you type (with smart debouncing)

### Advanced Options
- 🔧 **Error Correction Levels** - Low (7%), Medium (15%), Quartile (25%), High (30%)
- 🎨 **Color Customization** - Choose custom foreground and background colors
- 📏 **Flexible Sizing** - From 200x200 to 1000x1000 pixels
- 🎯 **Input Validation** - Real-time character counting and validation
- ♿ **Accessibility** - ARIA labels, keyboard navigation, and screen reader support

### User Experience
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🌟 **Modern UI** - Glass morphism design with smooth animations
- ⌨️ **Keyboard Shortcuts** - Ctrl+Enter to generate QR codes
- 🔄 **Loading States** - Visual feedback during QR code generation
- 🚫 **Error Handling** - Graceful error messages and fallbacks

## 🚀 Getting Started

### Quick Start
1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Enter your text or URL
4. Customize the appearance and settings
5. Generate and download your QR code!

### Local Development
```bash
# Clone the repository
git clone https://github.com/prabasajee/QR-generator.git

# Navigate to the project directory
cd QR-generator

# Open in your preferred editor
code .

# Serve locally (optional, but recommended for testing)
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using Live Server extension in VS Code
# Right-click index.html -> "Open with Live Server"
```

## 🎯 Usage Examples

### Text QR Code
Simply type any text in the input field and click "Generate QR Code".

### URL QR Code
```
https://www.example.com
```

### Email QR Code
```
mailto:someone@example.com?subject=Hello&body=How%20are%20you?
```

### Phone Number QR Code
```
tel:+1234567890
```

### WiFi QR Code
```
WIFI:T:WPA;S:NetworkName;P:Password;H:false;;
```

### SMS QR Code
```
sms:+1234567890?body=Hello%20World
```

## 🛠️ Technical Details

### Browser Support
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Dependencies
- **None!** - Pure vanilla JavaScript, HTML, and CSS
- Uses the QR Server API (qrserver.com) for QR code generation

### Performance Features
- **Debounced Input** - Prevents excessive API calls during typing
- **Image Preloading** - Validates QR codes before displaying
- **Lazy Loading** - Efficient resource loading
- **Optimized Animations** - 60fps smooth animations

## 🎨 Customization

### Color Themes
The application supports custom color schemes through the color picker interface. Colors are applied in real-time to the QR code generation.

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### CSS Custom Properties
The CSS uses modern features including:
- CSS Grid and Flexbox for layouts
- CSS Custom Properties (variables)
- CSS Backdrop Filter for glass effects
- CSS Animations and Transitions

## 🔧 API Reference

The application uses the QR Server API with the following parameters:

```
GET https://api.qrserver.com/v1/create-qr-code/
```

**Parameters:**
- `size`: Image dimensions (e.g., 300x300)
- `data`: URL-encoded content
- `ecc`: Error correction level (L, M, Q, H)
- `format`: Output format (png, jpg, gif, svg)
- `color`: Foreground color (hex without #)
- `bgcolor`: Background color (hex without #)

## 🚀 Deployment

### GitHub Pages
1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch
5. Your site will be available at `https://yourusername.github.io/QR-generator`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build directory to `./` (root)
3. Deploy automatically on every push

### Vercel
1. Import your GitHub repository
2. No build configuration needed
3. Deploy with zero configuration

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and patterns
- Test across different browsers and devices
- Update README for any new features
- Keep accessibility in mind

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [QR Server API](https://qrserver.com) for providing the QR code generation service
- [Inter Font](https://fonts.google.com/specimen/Inter) for the beautiful typography
- Modern web standards for enabling this to work without any frameworks

## 📞 Support

If you have any questions or run into issues:

1. **Check the Issues** - Someone might have already reported it
2. **Create a New Issue** - Provide detailed information about the problem
3. **Contact** - Reach out via the repository discussions

---

**Made with ❤️ by [prabasajee](https://github.com/prabasajee)**

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
