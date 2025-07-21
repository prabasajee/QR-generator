# Security Policy

## Supported Versions

We take security seriously for the QR Code Generator project. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do NOT** open a public issue
2. Email the maintainer directly (if available)
3. Or use GitHub's private vulnerability reporting feature
4. Include detailed information about the vulnerability
5. Provide steps to reproduce if possible

## Security Considerations

This project:
- Uses external QR code generation API (qrserver.com)
- Processes user input client-side
- Does not store or transmit personal data
- Runs entirely in the browser

## Best Practices
- Always validate and sanitize user input
- Use HTTPS when deploying
- Keep dependencies updated
- Follow OWASP guidelines

## Response Timeline
We aim to respond to security reports within 48 hours and provide updates within 7 days.
