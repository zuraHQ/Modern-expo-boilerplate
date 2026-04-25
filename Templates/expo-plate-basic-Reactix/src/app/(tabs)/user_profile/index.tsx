import { View, Pressable, Switch, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Feather from '@expo/vector-icons/Feather';
import { Ionicons } from '@expo/vector-icons';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { AppText } from '../../../components/app-text';
import { withUniwind } from 'uniwind';
import { Stack, useRouter } from 'expo-router';
import { DevTools } from '@/src/components/dev-tools';
import { ScreenScrollView } from '@/src/components/screen-scroll-view';
import { useOnboarding } from '../../../contexts/onboarding-context';
import { useRevenueCat } from '../../../contexts/revenuecat-context';

const StyledIonicons = withUniwind(Ionicons);

export default function SettingsScreen() {
    const { setOnboardingDone } = useOnboarding();
    const { presentPaywall } = useRevenueCat();
    const router = useRouter();

    const SETTINGS_OPTIONS = [
        {
            icon: 'refresh-cw' as const,
            label: 'Reset Onboarding',
            onPress: () => {
                Alert.alert(
                    "Reset Onboarding",
                    "This will take you back to the start of the app. Continue?",
                    [
                        { text: "Cancel", style: "cancel" },
                        { 
                            text: "Reset", 
                            style: "destructive",
                            onPress: async () => {
                                await setOnboardingDone(false);
                                router.replace('/onboarding');
                            }
                        }
                    ]
                );
            },
        },
        {
            icon: 'credit-card' as const,
            label: 'Test Paywall',
            onPress: async () => {
                try {
                    await presentPaywall();
                } catch (err) {
                    Alert.alert("Paywall Error", "Could not present paywall. Make sure RevenueCat is configured.");
                }
            },
        },
        {
            icon: 'file-text' as const,
            label: 'Privacy Policy',
            onPress: () => { },
        },
        {
            icon: 'book-open' as const,
            label: 'Terms of Service',
            onPress: () => { },
        },
        {
            icon: 'trash-2' as const,
            label: 'Delete Account',
            onPress: () => { },
            danger: true,
        },
    ];

    return (
        <>
            <Stack.Screen
                options={{
                    headerLargeTitle: true,
                    headerTitle: "Settings",
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerTransparent: true,
                }}
            />
            <ScreenScrollView>
                <View className="flex-1">
                    <View className="mt-2 gap-3">
                        {/* Settings Options */}
                        {SETTINGS_OPTIONS.map((item, index) => (
                            <Pressable key={index} onPress={item.onPress}>
                                <View className="p-4 bg-card border border-border rounded-2xl">
                                    <View className="flex-row items-center justify-between">
                                        <View className="flex-row items-center gap-3">
                                            <Feather
                                                name={item.icon}
                                                size={20}
                                                color={item.danger ? '#ef4444' : '#888'}
                                            />
                                            <AppText
                                                className={`font-medium ${item.danger ? 'text-red-500' : 'text-foreground'}`}
                                            >
                                                {item.label}
                                            </AppText>
                                        </View>
                                        <Feather name="chevron-right" size={20} color="#888" />
                                    </View>
                                </View>
                            </Pressable>
                        ))}
                    </View>
                    {__DEV__ && (
                        <View className="mt-4 px-5">
                            <AppText className="mb-2 text-muted-foreground">Only visible in development mode</AppText>
                            <DevTools />
                        </View>
                    )}
                </View>
            </ScreenScrollView>
        </>
    );
}

const styles = StyleSheet.create({});
