/**
 * UA-Friendly Parser
 * Parses User-Agent strings into structured data
 */
/**
 * Parse a User-Agent string into its components
 * @param {string} uaString - The User-Agent string to parse
 * @returns {Object} An object containing parsed UA information
 */
export function parseUserAgent(uaString: string): Object;
/**
 * Parse browser information from a User-Agent string
 * @param {string} uaString - The User-Agent string
 * @returns {Object} Browser information
 */
export function parseBrowser(uaString: string): Object;
/**
 * Parse OS information from a User-Agent string
 * @param {string} uaString - The User-Agent string
 * @returns {Object} OS information
 */
export function parseOS(uaString: string): Object;
/**
 * Parse device information from a User-Agent string
 * @param {string} uaString - The User-Agent string
 * @returns {Object} Device information
 */
export function parseDevice(uaString: string): Object;
