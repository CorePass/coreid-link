# Core ID Connector Application

A SvelteKit application for generating and displaying Core ID QR codes. When provided with a valid Core ID, it creates a scannable QR code and includes meta tags for social media sharing through Open Graph and Twitter Cards.

## Features

- QR code generation for Core IDs
- Real-time Core ID validation
- Social media preview support
- CorePass mobile app integration
- Built with SvelteKit and TypeScript

## Usage

### URL Format

The application is accessible at:

```txt
https://coreid.link/[your-core-id]
```

Replace `[your-core-id]` with your Core ID to generate a QR code and enable CorePass integration.

### Example

```txt
https://coreid.link/cb2266fec7f127e2f884f0fbbcbf45dfd6fad5401922
```

## Technical Details

### Meta Tags

The application includes dynamic meta tags for social media:

- Open Graph tags for Facebook and similar platforms
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
