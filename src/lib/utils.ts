import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * SEO utility functions
 */

/**
 * Generate a slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

/**
 * Generate meta description from content
 */
export function generateMetaDescription(
  content: string,
  maxLength: number = 160
): string {
  // Remove HTML tags and extra whitespace
  const cleanContent = content
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return truncateText(cleanContent, maxLength);
}

/**
 * Extract keywords from content
 */
export function extractKeywords(
  content: string,
  maxKeywords: number = 10
): string[] {
  // Remove HTML tags
  const cleanContent = content.replace(/<[^>]*>/g, "");

  // Common stop words to exclude
  const stopWords = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "but",
    "in",
    "on",
    "at",
    "to",
    "for",
    "of",
    "with",
    "by",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "would",
    "could",
    "should",
    "may",
    "might",
    "must",
    "can",
    "this",
    "that",
    "these",
    "those",
  ]);

  // Extract words and count frequency
  const words = cleanContent.toLowerCase().match(/\b\w+\b/g) || [];
  const wordCount: Record<string, number> = {};

  words.forEach((word) => {
    if (word.length > 2 && !stopWords.has(word)) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });

  // Sort by frequency and return top keywords
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

/**
 * Convert a relative URL to an absolute URL
 */
export function getAbsoluteUrl(path: string, baseUrl?: string): string {
  // If it's already an absolute URL, return as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Use provided base URL or default to site config
  const base = baseUrl || "https://polaris-six-rust.vercel.app";

  // Ensure base URL doesn't end with slash
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;

  return `${cleanBase}/${cleanPath}`;
}

/**
 * Get the site URL from config or fallback to default
 */
export function getSiteUrl(): string {
  return "https://polaris-six-rust.vercel.app";
}
