/**
 * UA-Friendly Parser
 * TypeScript definitions for UA-Friendly Parser
 */

import { Browser, OS, Device, ParsedUserAgent } from "../index";

/**
 * Parse a User-Agent string into its components
 * @param uaString - The User-Agent string to parse
 * @returns An object containing parsed UA information
 */
export function parseUserAgent(uaString: string): ParsedUserAgent;

/**
 * Parse browser information from a User-Agent string
 * @param uaString - The User-Agent string
 * @returns Browser information
 */
export function parseBrowser(uaString: string): Browser;

/**
 * Parse OS information from a User-Agent string
 * @param uaString - The User-Agent string
 * @returns OS information
 */
export function parseOS(uaString: string): OS;

/**
 * Parse device information from a User-Agent string
 * @param uaString - The User-Agent string
 * @returns Device information
 */
export function parseDevice(uaString: string): Device;
