import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    //!Form
    container: {
        width: "90%",
        marginTop: 30,
    },
    inputContainer: {
        marginBottom: 10,
        marginHorizontal: 7
    },
    textInput: {
        fontSize: 12,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginTop: 5,
    },
    errorText: {
        color: 'red',
        fontSize: 10,
    },
});
