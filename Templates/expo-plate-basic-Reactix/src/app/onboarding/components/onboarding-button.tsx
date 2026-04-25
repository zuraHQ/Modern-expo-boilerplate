import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChromaRing } from '../../../shared/ui/organisms/chroma-ring';
import { SymbolView } from "expo-symbols";

interface OnboardingButtonProps {
    label: string;
    onPress: () => void;
}

export function OnboardingButton({ label, onPress }: OnboardingButtonProps) {
    const insets = useSafeAreaInsets();

    return (
        <View
            className="px-6"
            style={{ paddingBottom: insets.bottom + 12, paddingTop: 12 }}
        >
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                className="items-center justify-center"
            >
                <ChromaRing
                    glow="#000000"
                    base="#000000"
                    background="#090811"
                    width={340}
                    height={56}
                    borderRadius={18}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                            padding: 12,
                        }}
                    >
                        <SymbolView name="ring.dashed" tintColor={"#fff"} size={20} />
                        <Text style={styles.title}>{label}</Text>
                    </View>
                </ChromaRing>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#fff",
        fontSize: 15,
        fontWeight: '600',
    },
});
