import { View } from 'react-native';
import { AppText } from '../../components/app-text';
import { FadeText } from '../../shared/ui/organisms/fade-text';

const INPUTS: string[] = [
    "Welcome to expo plate",
];

export default function WelcomeScreen() {
    return (
        <View
            className="flex-1 bg-black px-6"
            style={{ paddingTop: 40 }}
        >
            <View className="flex-1 items-center justify-center">
                <FadeText
                    inputs={INPUTS}
                    duration={3500}
                    wordDelay={300}
                    blurTint="dark"
                    fontSize={36}
                    fontWeight="700"
                />
            </View>
        </View>
    );
}
