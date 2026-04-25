import { View, StyleSheet, Pressable } from 'react-native';
import { AppText } from '../../components/app-text';
import { SymbolView, SFSymbol } from "expo-symbols";

const FEATURES = [
    { title: "Payments", sub: "Ready with RevenueCat", icon: "creditcard.fill" },
    { title: "Onboarding", sub: "Production-ready flow", icon: "iphone" },
    { title: "Components", sub: "Premium Skia UI library", icon: "square.grid.2x2.fill" },
    { title: "Styling", sub: "Universal Tailwind CSS", icon: "wind" },
];

export default function SetupScreen() {
    return (
        <View className="flex-1 bg-black px-6" style={{ paddingTop: 40 }}>
            <View className="flex-1">
                <AppText className="text-3xl font-bold text-white mb-2">
                    Ready to build?
                </AppText>
                <AppText className="text-lg text-white/60 mb-8">
                    We've set up everything you need.
                </AppText>

                <View style={styles.card}>
                    {FEATURES.map((item, i) => (
                        <Pressable 
                            key={i} 
                            style={[
                                styles.listItem, 
                                i === FEATURES.length - 1 && { borderBottomWidth: 0 }
                            ]}
                        >
                            <View style={styles.listIcon}>
                                <SymbolView
                                    name={item.icon as SFSymbol}
                                    size={18}
                                    tintColor="#888"
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <AppText className="font-semibold text-white">
                                    {item.title}
                                </AppText>
                                <AppText className="text-sm text-white/50">
                                    {item.sub}
                                </AppText>
                            </View>
                            <SymbolView name="chevron.right" size={12} tintColor="#333" />
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#090811",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#1c1c1c",
        overflow: 'hidden',
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#1c1c1c",
        gap: 14,
    },
    listIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,0.05)",
        justifyContent: "center",
        alignItems: "center",
    },
});
