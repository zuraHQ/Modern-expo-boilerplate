import { HeaderHeightContext } from '@react-navigation/elements';
import { cn } from './app-text';
import { type FC, type PropsWithChildren, useContext } from 'react';
import { type ScrollViewProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends ScrollViewProps {
  className?: string;
  contentContainerClassName?: string;
}

export const ScreenScrollView: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  contentContainerClassName,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  // Native tabs (expo-router/unstable-native-tabs) do not provide HeaderHeightContext.
  const headerHeight = useContext(HeaderHeightContext);
  const paddingTop = headerHeight ?? insets.top;
  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      keyboardShouldPersistTaps="handled"
      className={cn('bg-background', className)}
      contentContainerClassName={cn('px-5', contentContainerClassName)}
      contentContainerStyle={{
        paddingTop,
        paddingBottom: insets.bottom + 32,
      }}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};
