import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { ScreenScrollView } from '../../../components/screen-scroll-view';
import { useRevenueCat } from '../../../contexts/revenuecat-context';
import { Stack } from 'expo-router';

export default function App() {
  const { isProUser, presentPaywall } = useRevenueCat();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Home",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
      <ScreenScrollView>
        <View className="mt-2 gap-4">
          {/* User Card */}
          <View className="p-4 bg-card border border-border rounded-2xl">
            <View className="flex-row items-center gap-3">
              <View className="w-16 h-16 rounded-full bg-accent items-center justify-center overflow-hidden">
                <Image
                  source={{ uri: 'https://i.pravatar.cc/150?img=32' }}
                  className="w-full h-full"
                />
              </View>

              <View className="flex-1 gap-1">
                <Text className="text-foreground font-bold text-lg">John Doe</Text>
                <Text className="text-muted-foreground text-sm">Software Engineer</Text>
              </View>
            </View>

            <View className="mt-4 gap-2">
              <Text className="text-muted-foreground">
                Building amazing mobile experiences with React Native and Expo.
              </Text>
              <Text className="text-muted-foreground">
                Open source contributor and tech enthusiast.
              </Text>
            </View>

            <View className="mt-4 flex-row gap-3">
              <TouchableOpacity
                activeOpacity={0.8}
                className="flex-1 bg-primary h-11 rounded-xl items-center justify-center"
                onPress={() => {
                  Alert.alert('Following', 'You are now following John Doe');
                }}
              >
                <Text className="text-primary-foreground font-semibold">Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                className="flex-1 bg-secondary h-11 rounded-xl items-center justify-center"
              >
                <Text className="text-secondary-foreground font-semibold">Message</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Statistics Card */}
          <View className="p-4 bg-card border border-border rounded-2xl">
            <View className="mb-3">
              <Text className="text-foreground font-bold text-lg">Statistics</Text>
            </View>

            {isProUser ? (
              <View className="mt-3 flex-row justify-around">
                <View className="items-center gap-1">
                  <Text className="text-foreground font-bold text-lg">128</Text>
                  <Text className="text-muted-foreground text-sm">Posts</Text>
                </View>

                <View className="items-center gap-1">
                  <Text className="text-foreground font-bold text-lg">2.4K</Text>
                  <Text className="text-muted-foreground text-sm">Followers</Text>
                </View>

                <View className="items-center gap-1">
                  <Text className="text-foreground font-bold text-lg">891</Text>
                  <Text className="text-muted-foreground text-sm">Following</Text>
                </View>
              </View>
            ) : (
              <View className="mt-4 items-center gap-3">
                <Ionicons name="lock-closed" size={32} className="text-foreground" />
                <Text className="text-muted-foreground text-center">
                  This feature is gated
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="bg-primary px-6 h-11 rounded-xl items-center justify-center"
                  onPress={presentPaywall}
                >
                  <Text className="text-primary-foreground font-semibold">Unlock Feature</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScreenScrollView>
    </>
  );
}
