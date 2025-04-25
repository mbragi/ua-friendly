/**
 * UA-Friendly TypeScript Usage Example
 */

import {
  uaToFriendly,
  parseUserAgent,
  ParsedUserAgent,
  UAFormatOptions,
} from "../index";

// Example User-Agent strings
const examples: string[] = [
  // Chrome on Windows
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  // Safari on macOS
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15",
];

console.log("UA-Friendly TypeScript Usage Example\n");

// Define formatting options with TypeScript interface
const options: UAFormatOptions = {
  includeVersion: true,
  includeOS: true,
  includeDevice: true,
};

// Process each example
examples.forEach((ua: string, index: number) => {
  console.log(`Example ${index + 1}:`);
  console.log(`UA: ${ua}`);

  // Get friendly description with type safety
  const friendly: string = uaToFriendly(ua, options);
  console.log(`Friendly: ${friendly}`);

  // Get parsed UA data with type safety
  const parsed: ParsedUserAgent = parseUserAgent(ua);
  console.log("Parsed data:", JSON.stringify(parsed, null, 2));

  // Type-safe access to parsed properties
  const { browser, os, device } = parsed;
  console.log(`Browser: ${browser.name} ${browser.version}`);
  console.log(`OS: ${os.name} ${os.version}`);
  console.log(`Device type: ${device.type}`);

  console.log("-----------------------------------\n");
});
