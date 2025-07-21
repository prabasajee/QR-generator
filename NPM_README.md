# @prabasajee/qr-generator

A modern, feature-rich QR code generator package with customizable colors, sizes, formats, and error correction levels. Built with vanilla JavaScript.

## Installation

```bash
npm install @prabasajee/qr-generator
```

## Usage

### Node.js

```javascript
const QRCodeGenerator = require('@prabasajee/qr-generator');

const qrGenerator = new QRCodeGenerator();

// Generate a basic QR code URL
const qrUrl = qrGenerator.generateQRCodeURL('https://example.com');
console.log(qrUrl);

// Generate with custom options
const customQrUrl = qrGenerator.generateQRCodeURL('Hello World!', {
    size: 500,
    errorCorrection: 'H',
    format: 'png',
    foregroundColor: '000080',
    backgroundColor: 'ffffff'
});
console.log(customQrUrl);

// Validate data before generating
const validation = qrGenerator.validateData('Your text here');
if (validation.valid) {
    const qrUrl = qrGenerator.generateQRCodeURL('Your text here');
    // Use the URL...
} else {
    console.error(validation.error);
}
```

### Browser

```html
<script src="path/to/index.js"></script>
<script>
    const qrGenerator = new QRCodeGenerator();
    const qrUrl = qrGenerator.generateQRCodeURL('https://example.com');
    
    // Display in an image element
    const img = document.createElement('img');
    img.src = qrUrl;
    document.body.appendChild(img);
</script>
```

## API Reference

### `new QRCodeGenerator()`

Creates a new QR code generator instance.

### `generateQRCodeURL(data, options)`

Generates a QR code image URL.

**Parameters:**
- `data` (string): The data to encode in the QR code
- `options` (object, optional): Customization options

**Options:**
- `size` (number): QR code size in pixels (default: 300)
- `errorCorrection` (string): Error correction level - 'L', 'M', 'Q', 'H' (default: 'M')
- `format` (string): Image format - 'png', 'jpg', 'gif', 'svg' (default: 'png')
- `foregroundColor` (string): Hex color code without # (default: '000000')
- `backgroundColor` (string): Hex color code without # (default: 'ffffff')

**Returns:** String - URL to the generated QR code image

### `validateData(data)`

Validates QR code data.

**Parameters:**
- `data` (string): Data to validate

**Returns:** Object with `valid` (boolean) and `error` (string|null) properties

### `getSupportedOptions()`

Returns supported configuration options.

**Returns:** Object containing arrays of supported sizes, error correction levels, and formats

## Examples

### Different Data Types

```javascript
const qrGenerator = new QRCodeGenerator();

// URL
const urlQR = qrGenerator.generateQRCodeURL('https://github.com/prabasajee/QR-generator');

// Email
const emailQR = qrGenerator.generateQRCodeURL('mailto:example@email.com?subject=Hello&body=Hi%20there!');

// Phone
const phoneQR = qrGenerator.generateQRCodeURL('tel:+1234567890');

// SMS
const smsQR = qrGenerator.generateQRCodeURL('sms:+1234567890?body=Hello%20World');

// WiFi
const wifiQR = qrGenerator.generateQRCodeURL('WIFI:T:WPA;S:NetworkName;P:Password;H:false;;');
```

### Custom Styling

```javascript
const colorfulQR = qrGenerator.generateQRCodeURL('Colorful QR Code!', {
    size: 400,
    foregroundColor: '2E8B57', // Sea Green
    backgroundColor: 'F0F8FF', // Alice Blue
    errorCorrection: 'Q'
});
```

## Error Correction Levels

- **L (Low)**: ~7% recovery capability
- **M (Medium)**: ~15% recovery capability (default)
- **Q (Quartile)**: ~25% recovery capability
- **H (High)**: ~30% recovery capability

## License

MIT

## Repository

[GitHub Repository](https://github.com/prabasajee/QR-generator)
