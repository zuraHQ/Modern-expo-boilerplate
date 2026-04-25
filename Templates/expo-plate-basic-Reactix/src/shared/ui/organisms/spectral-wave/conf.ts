const DEFAULTS: Record<string, any> = {
  WIDTH: 300,
  HEIGHT: 60,
  BORDER_RADIUS: 100,
  ITERATIONS: 6,
  SCALE: 1.2,
  WAVELENGTH_OFFSET: 500,
  WAVELENGTH_RANGE: 80,
  TIME_SCALE: 0.6,
  BORDER_WIDTH: 0,
  BORDER_COLOR: "#c0c0c0",
  BORDER_GLOW: 0,
  GLOW_RADIUS: 12,
  BRIGHTNESS: 1,
  COLORS: undefined as [string, string, string] | undefined,
} as const;

export { DEFAULTS };
