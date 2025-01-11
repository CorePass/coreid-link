# Core ID Connector Application

A SvelteKit application that generates and displays Core ID QR codes. When provided with a valid Core ID, it generates a scannable QR code and includes meta tags for social media sharing via Open Graph and Twitter Cards.

## Features

- QR code generation for valid Core IDs
- Validation status messages for Core IDs
- Social media preview support via Open Graph and Twitter Cards
- CorePass mobile app integration
- Built with SvelteKit and TypeScript

## Usage

### URL Format

Access the application using:

```txt
https://coreid.link/[your-core-id]
```

Replace `[your-core-id]` with a valid Core ID to generate its QR code and enable CorePass mobile integration.

### Example

```txt
https://coreid.link/cb2266fec7f127e2f884f0fbbcbf45dfd6fad5401922
```

## Technical Details

### Meta Tags

The application dynamically generates meta tags for social media platforms:

- Open Graph tags for Facebook and other platforms
- Twitter Card tags for Twitter previews

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Core Dependencies

- `@blockchainhub/ican`: Core ID validation and formatting
- `@blockchainhub/blo`: Address icon generation
- `device-sherlock`: Mobile device detection
- `qrcode`: QR code generation

## License

Licensed under the [Core License](LICENSE).
