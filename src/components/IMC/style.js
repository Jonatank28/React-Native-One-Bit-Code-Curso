import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginTop: 30,
    },
    inputContainer: {
        marginBottom: 10,
        marginHorizontal: 7
    },
    input: {
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
        borderRadius: 15,
        paddingVertical: 2,
        paddingHorizontal: 8,
        marginTop: 5,
    },
    button: {
        padding: 15,
        alignItems: "center",
        borderRadius: 15,
        marginTop: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    resultIMC: {
        marginTop: 15,
        color: 'gray'
    }
});
