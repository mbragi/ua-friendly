/**
 * Converts a User-Agent string into a friendly, human-readable description
 * @param {string} uaString - The User-Agent string to parse
 * @param {Object} options - Optional configuration
 * @param {boolean} options.includeVersion - Whether to include version numbers in the output (default: true)
 * @param {boolean} options.includeOS - Whether to include OS information in the output (default: true)
 * @param {boolean} options.includeDevice - Whether to include device information in the output (default: true)
 * @returns {string} A friendly, human-readable description of the User-Agent
 */
export function uaToFriendly(uaString: string, options?: {
    includeVersion: boolean;
    includeOS: boolean;
    includeDevice: boolean;
}): string;
import { parseUserAgent } from "./lib/parser";
export { parseUserAgent };
