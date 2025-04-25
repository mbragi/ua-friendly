/**
 * UA-Friendly
 * A library to convert User-Agent strings into friendly, human-readable text
 */

const { parseUserAgent } = require("./lib/parser");
const { formatUserAgent } = require("./lib/formatter");

/**
 * Converts a User-Agent string into a friendly, human-readable description
 * @param {string} uaString - The User-Agent string to parse
 * @param {Object} options - Optional configuration
 * @param {boolean} options.includeVersion - Whether to include version numbers in the output (default: true)
 * @param {boolean} options.includeOS - Whether to include OS information in the output (default: true)
 * @param {boolean} options.includeDevice - Whether to include device information in the output (default: true)
 * @returns {string} A friendly, human-readable description of the User-Agent
 */
function uaToFriendly(uaString, options = {}) {
  // Set default options
  const defaultOptions = {
    includeVersion: true,
    includeOS: true,
    includeDevice: true,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  // Parse the UA string into components
  const parsedUA = parseUserAgent(uaString);

  // Format the parsed components into a friendly string
  return formatUserAgent(parsedUA, mergedOptions);
}

module.exports = {
  uaToFriendly,
  parseUserAgent,
};
