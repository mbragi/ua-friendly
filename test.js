/**
 * UA-Friendly Test Script
 * A simple script to test the UA-Friendly library
 */

const { uaToFriendly } = require("./index");

// Test with a real User-Agent string
const testUA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

console.log("\nUA-Friendly Test\n");
console.log(`Input UA: ${testUA}`);
console.log(`Output: ${uaToFriendly(testUA)}`);

// Test with different options
console.log("\nTesting different options:");
console.log(`No version: ${uaToFriendly(testUA, { includeVersion: false })}`);
console.log(`No OS: ${uaToFriendly(testUA, { includeOS: false })}`);
console.log(`No device: ${uaToFriendly(testUA, { includeDevice: false })}`);
console.log(
  `Minimal: ${uaToFriendly(testUA, {
    includeVersion: false,
    includeOS: false,
    includeDevice: false,
  })}`
);

console.log("\nTest completed successfully!");
