import type { RGBA } from "./types";

function colorToRGBA<T extends string>(color: T): RGBA {
  let r = 1;
  let g = 1;
  let b = 1;
  let a = 1;

  if (color.startsWith("#")) {
    const hex = color.slice(1);

    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16) / 255;
      g = parseInt(hex[1] + hex[1], 16) / 255;
      b = parseInt(hex[2] + hex[2], 16) / 255;
    } else if (hex.length === 6) {
      r = parseInt(hex.slice(0, 2), 16) / 255;
      g = parseInt(hex.slice(2, 4), 16) / 255;
      b = parseInt(hex.slice(4, 6), 16) / 255;
    } else if (hex.length === 8) {
      r = parseInt(hex.slice(0, 2), 16) / 255;
      g = parseInt(hex.slice(2, 4), 16) / 255;
      b = parseInt(hex.slice(4, 6), 16) / 255;
      a = parseInt(hex.slice(6, 8), 16) / 255;
    }
  } else {
    const match = color.match(
      /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/,
    );
    if (match) {
      r = parseInt(match[1], 10) / 255;
      g = parseInt(match[2], 10) / 255;
      b = parseInt(match[3], 10) / 255;
      a = match[4] !== undefined ? parseFloat(match[4]) : 1;
    }
  }

  return [r, g, b, a];
}

export { colorToRGBA };
