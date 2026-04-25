import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import React from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

export const AppText = React.forwardRef<RNText, RNTextProps>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <RNText ref={ref} className={cn('font-normal', className)} {...restProps} />
  );
});

AppText.displayName = 'AppText';
