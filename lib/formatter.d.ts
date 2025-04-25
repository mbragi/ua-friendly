/**
 * UA-Friendly Formatter
 * TypeScript definitions for UA-Friendly Formatter
 */

import { ParsedUserAgent, UAFormatOptions } from "../index";

/**
 * Format parsed User-Agent data into a friendly, human-readable string
 * @param parsedUA - The parsed User-Agent data
 * @param options - Formatting options
 * @returns A friendly, human-readable description
 */
export function formatUserAgent(
  parsedUA: ParsedUserAgent,
  options: UAFormatOptions
): string;

/**
 * Format browser information
 * @param browser - Browser information
 * @param includeVersion - Whether to include version
 * @returns Formatted browser text
 */
export function formatBrowser(
  browser: ParsedUserAgent["browser"],
  includeVersion: boolean
): string;

/**
 * Format OS information
 * @param os - OS information
 * @param includeVersion - Whether to include version
 * @returns Formatted OS text
 */
export function formatOS(
  os: ParsedUserAgent["os"],
  includeVersion: boolean
): string;

/**
 * Format device information
 * @param device - Device information
 * @returns Formatted device text
 */
export function formatDevice(device: ParsedUserAgent["device"]): string;

/**
 * Join parts of the formatted User-Agent string
 * @param parts - Array of string parts to join
 * @returns Joined string
 */
export function joinParts(parts: string[]): string;
