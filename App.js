import { StatusBar, Text, View, StyleSheet } from "react-native";
import Imc from "./src/components/IMC";



export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>ONEBITALTH</Text>
                </View>
                <View style={styles.content}>
                    <Imc />
                </View>
            </View>
            <StatusBar barStyle="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#E1E7E4",
    },
    headerContent: {
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        paddingTop: 60,
        backgroundColor: "#E1E7E4",
    },
    headerText: {
        color: "red",
        fontSize: 25,
        fontWeight: "bold",
    },
    content: {
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
});
