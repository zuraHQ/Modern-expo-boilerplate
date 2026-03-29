import { View } from 'react-native';
import { Button, LinkButton, Separator } from 'heroui-native';
import * as WebBrowser from 'expo-web-browser';
import { useAuth } from '@clerk/clerk-expo';
import { useOnboarding } from '../contexts/onboarding-context';
import { useRevenueCat } from '../contexts/revenuecat-context';
import { storage, StorageKeys } from '../helpers/utils/storage';
import { AppText } from './app-text';

const HEROUI_NATIVE_VERSION = require('heroui-native/package.json')
    .version as string;
const HEROUI_COMPONENTS_DOCS_URL = 'https://heroui.com/docs/native/components';

export function DevTools() {
    const { setOnboardingDone } = useOnboarding();
    const { presentPaywall } = useRevenueCat();
    const { signOut } = useAuth();

    const handleResetOnboarding = async () => {
        await setOnboardingDone(false);
        await storage.remove(StorageKeys.USER_NAME);
        await storage.remove(StorageKeys.USER_PREFERENCES);
        await signOut();
    };

    return (
        <View className="mt-3 gap-3">
            <Separator />
            <View className="gap-1">
                <AppText className="text-xs text-foreground/60">
                    heroui-native v{HEROUI_NATIVE_VERSION}
                </AppText>
                <LinkButton
                    accessibilityRole="link"
                    accessibilityLabel="Open HeroUI Native components documentation"
                    className="self-start"
                    onPress={() =>
                        void WebBrowser.openBrowserAsync(HEROUI_COMPONENTS_DOCS_URL)
                    }
                >
                    <LinkButton.Label>HeroUI components</LinkButton.Label>
                </LinkButton>
            </View>
            <Button variant="primary" className="bg-red-500" onPress={handleResetOnboarding}>
                <Button.Label>Reset Onboarding</Button.Label>
            </Button>
            <Button variant="primary" onPress={presentPaywall}>
                <Button.Label>Test Paywall</Button.Label>
            </Button>
        </View>
    );
}
