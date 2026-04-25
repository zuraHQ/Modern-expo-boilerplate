import type { StyleProp, ViewStyle } from "react-native";

type RGBA = [number, number, number, number];

interface ISpectralWave {
  width?: number;
  height?: number;
  borderRadius?: number;
  iterations?: number;
  scale?: number;
  wavelengthOffset?: number;
  wavelengthRange?: number;
  timeScale?: number;
  borderWidth?: number;
  borderColor?: string;
  borderGlow?: number;
  glowRadius?: number;
  brightness?: number;
  colors?: [string, string, string];
  asChild?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export type { ISpectralWave, RGBA };
