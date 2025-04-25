/**
 * UA-Friendly Formatter
 * Formats parsed User-Agent data into friendly, human-readable text
 */

/**
 * Format parsed User-Agent data into a friendly, human-readable string
 * @param {Object} parsedUA - The parsed User-Agent data
 * @param {Object} options - Formatting options
 * @returns {string} A friendly, human-readable description
 */
function formatUserAgent(parsedUA, options) {
  const { browser, os, device } = parsedUA;
  const parts = [];

  // Format browser information
  const browserText = formatBrowser(browser, options.includeVersion);
  if (browserText) parts.push(browserText);

  // Format OS information if requested
  if (options.includeOS) {
    const osText = formatOS(os, options.includeVersion);
    if (osText) parts.push(osText);
  }

  // Format device information if requested
  if (options.includeDevice) {
    const deviceText = formatDevice(device);
    if (deviceText) parts.push(deviceText);
  }

  // Join all parts with appropriate connectors
  return joinParts(parts);
}

/**
 * Format browser information
 * @param {Object} browser - Browser information
 * @param {boolean} includeVersion - Whether to include version
 * @returns {string} Formatted browser text
 */
function formatBrowser(browser, includeVersion) {
  if (!browser || browser.name === "Unknown") return "";

  if (includeVersion && browser.version) {
    return `${browser.name} ${browser.version}`;
  }

  return browser.name;
}

/**
 * Format OS information
 * @param {Object} os - OS information
 * @param {boolean} includeVersion - Whether to include version
 * @returns {string} Formatted OS text
 */
function formatOS(os, includeVersion) {
  if (!os || os.name === "Unknown") return "";

  // Check if the OS name already includes the version number (like Windows 10)
  const nameContainsVersion = os.version && os.name.includes(os.version);
  const nameContainsPartialVersion =
    os.version &&
    os.name.match(/\d+/) &&
    os.name.match(/\d+/)[0] === os.version.split(".")[0];

  if (
    includeVersion &&
    os.version &&
    !nameContainsVersion &&
    !nameContainsPartialVersion
  ) {
    return `on ${os.name} ${os.version}`;
  }

  return `on ${os.name}`;
}

/**
 * Format device information
 * @param {Object} device - Device information
 * @returns {string} Formatted device text
 */
function formatDevice(device) {
  if (!device || device.type === "Unknown") return "";

  let deviceText = "";

  if (device.brand && device.model) {
    deviceText = `on a ${device.brand} ${device.model}`;
  } else if (device.brand) {
    deviceText = `on a ${device.brand} device`;
  } else {
    deviceText = `on a ${device.type}`;
  }

  return deviceText;
}

/**
 * Join parts of the description with appropriate connectors
 * @param {string[]} parts - Parts to join
 * @returns {string} Joined text
 */
function joinParts(parts) {
  if (parts.length === 0) return "Unknown browser";

  // Filter out empty parts
  const filteredParts = parts.filter((part) => part);

  // Join parts with appropriate connectors
  return filteredParts.join(" ");
}

module.exports = {
  formatUserAgent,
  formatBrowser,
  formatOS,
  formatDevice,
};
