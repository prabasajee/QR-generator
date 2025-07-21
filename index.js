/**
 * QR Code Generator - Main Entry Point
 * A modern, feature-rich QR code generator with customizable options
 * 
 * @author prabasajee
 * @version 1.0.0
 * @license MIT
 */

// QR Code Generator Class
class QRCodeGenerator {
    constructor() {
        console.log("QR Code Generator v1.0.0 - Initialized");
        this.apiBaseUrl = 'https://api.qrserver.com/v1/create-qr-code/';
        this.defaultOptions = {
            size: 300,
            errorCorrection: 'M',
            format: 'png',
            foregroundColor: '000000',
            backgroundColor: 'ffffff'
        };
    }

    /**
     * Generate QR Code URL with custom options
     * @param {string} data - The data to encode in the QR code
     * @param {Object} options - Customization options
     * @returns {string} - QR code image URL
     */
    generateQRCodeURL(data, options = {}) {
        const config = { ...this.defaultOptions, ...options };
        
        if (!data || typeof data !== 'string') {
            throw new Error('Data must be a non-empty string');
        }

        const params = new URLSearchParams({
            size: `${config.size}x${config.size}`,
            data: data,
            ecc: config.errorCorrection,
            format: config.format,
            color: config.foregroundColor.replace('#', ''),
            bgcolor: config.backgroundColor.replace('#', '')
        });

        return `${this.apiBaseUrl}?${params.toString()}`;
    }

    /**
     * Validate QR code data
     * @param {string} data - Data to validate
     * @returns {Object} - Validation result
     */
    validateData(data) {
        if (!data || typeof data !== 'string') {
            return { valid: false, error: 'Data must be a non-empty string' };
        }
        
        if (data.length > 2048) {
            return { valid: false, error: 'Data exceeds maximum length of 2048 characters' };
        }

        return { valid: true, error: null };
    }

    /**
     * Get supported options
     * @returns {Object} - Available options
     */
    getSupportedOptions() {
        return {
            sizes: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            errorCorrectionLevels: ['L', 'M', 'Q', 'H'],
            formats: ['png', 'jpg', 'gif', 'svg'],
            maxDataLength: 2048
        };
    }
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QRCodeGenerator;
}

// Global access for browser environments
if (typeof window !== 'undefined') {
    window.QRCodeGenerator = QRCodeGenerator;
}

console.log("@prabasajee/qr-generator package loaded successfully!");
