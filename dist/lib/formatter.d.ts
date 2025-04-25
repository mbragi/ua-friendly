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
export function formatUserAgent(parsedUA: Object, options: Object): string;
/**
 * Format browser information
 * @param {Object} browser - Browser information
 * @param {boolean} includeVersion - Whether to include version
 * @returns {string} Formatted browser text
 */
export function formatBrowser(browser: Object, includeVersion: boolean): string;
/**
 * Format OS information
 * @param {Object} os - OS information
 * @param {boolean} includeVersion - Whether to include version
 * @returns {string} Formatted OS text
 */
export function formatOS(os: Object, includeVersion: boolean): string;
/**
 * Format device information
 * @param {Object} device - Device information
 * @returns {string} Formatted device text
 */
export function formatDevice(device: Object): string;
