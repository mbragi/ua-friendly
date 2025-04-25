# UA-Friendly

A lightweight JavaScript library that converts technical User-Agent strings into friendly, human-readable text.

## Features

- Parses User-Agent strings to extract browser, OS, and device information
- Converts technical UA strings into natural language descriptions
- Customizable output format with options to include/exclude version numbers, OS info, and device info
- No external dependencies
- Works in Node.js environments
- TypeScript support with type definitions

## Installation

```bash
npm install ua-friendly
```

## Usage

### Basic Usage

```javascript
const { uaToFriendly } = require('ua-friendly');

// Example User-Agent string
const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';

// Convert to friendly text
const friendly = uaToFriendly(ua);
console.log(friendly);
// Output: Chrome 91.0.4472.124 on Windows 10 on a Desktop
```

### TypeScript Usage

UA-Friendly includes TypeScript definitions for type safety and better IDE support.

```typescript
import { uaToFriendly, parseUserAgent, ParsedUserAgent, UAFormatOptions } from 'ua-friendly';

// Example User-Agent string
const ua: string = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';

// Define options with type safety
const options: UAFormatOptions = {
  includeVersion: true,
  includeOS: true,
  includeDevice: true
};

// Convert to friendly text with type safety
const friendly: string = uaToFriendly(ua, options);
console.log(friendly);

// Get parsed UA data with type safety
const parsed: ParsedUserAgent = parseUserAgent(ua);
console.log(parsed.browser.name); // Chrome
```

### Customizing Output

```javascript
const { uaToFriendly } = require('ua-friendly');

const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1';

// Without version numbers
const noVersion = uaToFriendly(ua, { includeVersion: false });
console.log(noVersion);
// Output: Safari on iOS on a Apple iPhone

// Without OS information
const noOS = uaToFriendly(ua, { includeOS: false });
console.log(noOS);
// Output: Safari 14.0 on a Apple iPhone

// Without device information
const noDevice = uaToFriendly(ua, { includeDevice: false });
console.log(noDevice);
// Output: Safari 14.0 on iOS 14.6
```

### Advanced Usage

```javascript
const { parseUserAgent } = require('ua-friendly');

const ua = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0';

// Get detailed parsed information
const parsed = parseUserAgent(ua);
console.log(parsed);
/* Output:
{
  browser: { name: 'Firefox', version: '89.0' },
  os: { name: 'Linux', version: '' },
  device: { type: 'Desktop', brand: '', model: '' }
}
*/
```

## API Reference

### uaToFriendly(uaString, options)

Converts a User-Agent string into a friendly, human-readable description.

- **uaString** (string): The User-Agent string to parse
- **options** (object, optional): Configuration options
  - **includeVersion** (boolean): Whether to include version numbers (default: true)
  - **includeOS** (boolean): Whether to include OS information (default: true)
  - **includeDevice** (boolean): Whether to include device information (default: true)

Returns a string with the friendly description.

### parseUserAgent(uaString)

Parses a User-Agent string into structured data.

- **uaString** (string): The User-Agent string to parse

Returns an object containing:
- **browser**: Browser information (name, version)
- **os**: Operating system information (name, version)
- **device**: Device information (type, brand, model)

### TypeScript Interfaces

The following TypeScript interfaces are available for type safety:

#### ParsedUserAgent

```typescript
interface ParsedUserAgent {
  browser: Browser;
  os: OS;
  device: Device;
}
```

#### Browser

```typescript
interface Browser {
  name: string;
  version: string;
}
```

#### OS

```typescript
interface OS {
  name: string;
  version: string;
}
```

#### Device

```typescript
interface Device {
  type: string;
  brand: string;
  model: string;
}
```

#### UAFormatOptions

```typescript
interface UAFormatOptions {
  includeVersion?: boolean;
  includeOS?: boolean;
  includeDevice?: boolean;
}
```

## Examples

See the [examples](./ua-friendly/examples) directory for more usage examples.

## License

ISC