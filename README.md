# Core ID Connector Application

This is a SvelteKit application that generates and displays a Core ID QR code when provided with a valid Core ID. The application checks the validity of the Core ID and presents different content based on whether the ID is valid, missing, or invalid. It also includes meta tags for Open Graph and Twitter Cards, making the Core ID sharable across social media.

## Features

- Generates a QR code for valid Core IDs.
- Displays messages if the Core ID is missing or invalid.
- Provides a sharable Open Graph and Twitter preview for Core IDs.
- Supports opening the Core ID in CorePass on mobile devices.
- Built using SvelteKit and TypeScript.

## Usage

### URL Format

To use the application, format your URL as follows:

```txt
https://coreid.link/[your-core-id]
```

Replace `[your-core-id]` with a valid Core ID. If the Core ID is valid, the application will display the QR code and allow the user to open the Core ID in CorePass on mobile devices.

### Example

```txt
https://coreid.link/cb2266fec7f127e2f884f0fbbcbf45dfd6fad5401922
```

This will display a QR code for the Core ID `cb2266fec7f127e2f884f0fbbcbf45dfd6fad5401922`.

## Meta Tags

The application uses dynamic meta tags to improve sharing across social media platforms like Facebook and Twitter. The meta tags are dynamically generated based on the Core ID validity and include the following:

- **Open Graph Meta Tags** for generating previews in social media posts.
- **Twitter Card Meta Tags** for generating previews in Twitter posts.

## Scripts

### Development

To start the development server:

```bash
npm run dev
```

### Build

To build the application for production:

```bash
npm run build
```

## Dependencies

- **@blockchainhub/ican**: Provides Core ID formatting and validation functions.
- **@blockchainhub/blo**: Used to generate address icons.
- **device-sherlock**: Determines if the application is being accessed on mobile devices.
- **qrcode**: Generates QR codes for valid Core IDs.

## License

This project is licensed under the [Core License](LICENSE).
