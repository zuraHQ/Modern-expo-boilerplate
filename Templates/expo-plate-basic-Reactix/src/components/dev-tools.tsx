import { View, TouchableOpacity, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useOnboarding } from '../contexts/onboarding-context';
import { useRevenueCat } from '../contexts/revenuecat-context';
import { storage, StorageKeys } from '../helpers/utils/storage';
import { AppText } from './app-text';



export function DevTools() {
    const { setOnboardingDone } = useOnboarding();
    const { presentPaywall } = useRevenueCat();

    const handleResetOnboarding = async () => {
        await setOnboardingDone(false);
        await storage.remove(StorageKeys.USER_NAME);
        await storage.remove(StorageKeys.USER_PREFERENCES);
    };

    return (
        <View className="mt-3 gap-3">
            <View className="h-[1px] bg-border" />

            <TouchableOpacity 
                className="bg-destructive h-11 rounded-xl items-center justify-center" 
                onPress={handleResetOnboarding}
            >
                <Text className="text-destructive-foreground font-semibold">Reset Onboarding</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                className="bg-primary h-11 rounded-xl items-center justify-center" 
                onPress={presentPaywall}
            >
                <Text className="text-primary-foreground font-semibold">Test Paywall</Text>
            </TouchableOpacity>
        </View>
    );
}
