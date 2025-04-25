/**
 * UA-Friendly
 * TypeScript definitions for UA-Friendly
 */

/**
 * Interface for browser information
 */
export interface Browser {
  name: string;
  version: string;
}

/**
 * Interface for operating system information
 */
export interface OS {
  name: string;
  version: string;
}

/**
 * Interface for device information
 */
export interface Device {
  type: string;
  brand: string;
  model: string;
}

/**
 * Interface for parsed User-Agent data
 */
export interface ParsedUserAgent {
  browser: Browser;
  os: OS;
  device: Device;
}

/**
 * Interface for User-Agent formatting options
 */
export interface UAFormatOptions {
  includeVersion?: boolean;
  includeOS?: boolean;
  includeDevice?: boolean;
}

/**
 * Converts a User-Agent string into a friendly, human-readable description
 * @param uaString - The User-Agent string to parse
 * @param options - Optional configuration
 * @returns A friendly, human-readable description of the User-Agent
 */
export function uaToFriendly(
  uaString: string,
  options?: UAFormatOptions
): string;

/**
 * Parse a User-Agent string into its components
 * @param uaString - The User-Agent string to parse
 * @returns An object containing parsed UA information
 */
export function parseUserAgent(uaString: string): ParsedUserAgent;
