import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from 'expo-router/unstable-native-tabs';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Alert } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';
import LogoDark from '../../../assets/logo-dark.png';
import LogoLight from '../../../assets/logo-light.png';
import { useAppTheme } from '../../contexts/app-theme-context';

export default function Layout() {
  const { isDark } = useAppTheme();

  // false for basic tabs, true for native tabs
  const [showNativeTabs] = useState(true)
  
  const themeColorForeground = isDark ? '#ffffff' : '#000000';
  const themeColorBackground = isDark ? '#000000' : '#ffffff';

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      Alert.alert('Reduce motion enabled', 'All animations will be disabled');
    }
  }, [reducedMotion]);

  const _renderTitle = () => {
    return (
      <Image
        source={isDark ? LogoLight : LogoDark}
        style={styles.logo}
        resizeMode="contain"
      />
    );
  };

  if (showNativeTabs) {
    return (
      <View className="flex-1 bg-background">
        <NativeTabs
          backgroundColor={themeColorBackground}
          iconColor={{
            default: themeColorForeground,
            selected: themeColorForeground,
          }}
        >
          <NativeTabs.Trigger name="home/index">
            <Label>Home</Label>
            <Icon src={<VectorIcon family={Ionicons} name="home" />} />
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="user_profile/index">
            <Label>Settings</Label>
            <Icon src={<VectorIcon family={Ionicons} name="person" />} />
          </NativeTabs.Trigger>
        </NativeTabs>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <Tabs
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: themeColorForeground,
          headerStyle: {
            backgroundColor: themeColorBackground,
          },
          headerTransparent: true,
          headerShadowVisible: false,
          tabBarActiveTintColor: themeColorForeground,
          tabBarStyle: {
            backgroundColor: themeColorBackground,
          },
        }}
      >
        <Tabs.Screen
          name="home/index"
          options={{
            headerTitle: _renderTitle,
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="user_profile/index"
          options={{
            headerTitle: "Settings",
            title: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 24,
  },
});
