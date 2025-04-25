/**
 * UA-Friendly Basic Usage Example
 */

const { uaToFriendly, parseUserAgent } = require("../index");

// Example User-Agent strings
const examples = [
  // Chrome on Windows
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  // Safari on macOS
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15",
  // Firefox on Linux
  "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0",
  // Edge on Windows
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59",
  // Chrome on Android
  "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36",
  // Safari on iPhone
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
];

console.log("UA-Friendly Basic Usage Example\n");

// Process each example
examples.forEach((ua, index) => {
  console.log(`Example ${index + 1}:`);
  console.log(`UA: ${ua}`);

  // Get friendly description
  const friendly = uaToFriendly(ua);
  console.log(`Friendly: ${friendly}`);

  // Get friendly description without version numbers
  const friendlyNoVersion = uaToFriendly(ua, { includeVersion: false });
  console.log(`Friendly (no version): ${friendlyNoVersion}`);

  // Get parsed UA data
  const parsed = parseUserAgent(ua);
  console.log("Parsed data:", JSON.stringify(parsed, null, 2));

  console.log("-----------------------------------\n");
});
