/**
 * Splits a string into an array of words for word-by-word GSAP stagger
 * animation. Avoids the paid GSAP SplitText plugin — good enough for
 * headline-length copy (see .word-split in globals.css).
 */
export function splitWords(text: string): string[] {
  return text.split(" ").filter(Boolean);
}
