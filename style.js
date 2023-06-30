import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "rgb(243 242 239);",
    },
    headerContent: {
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        paddingTop: 60,
        backgroundColor: "rgba(243 242 239);",
    },
    headerText: {
        color: "red",
        fontSize: 20,
        fontWeight: "bold",
    },
    content: {
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    button: {
        padding: 15,
        alignItems: "center",
        borderRadius: 15,
        marginTop: 5,
        backgroundColor: 'blue',
        paddingHorizontal: 40,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    resultIMC: {
        marginTop: 3,
        color: 'gray',
        textAlign: 'center',
    },
    //! Share
    containerShare: {
        marginTop: 10,
        padding: 4,
        alignSelf: 'center',
        width: '40%',
    },
    buttonShare: {
        backgroundColor: 'blue',
        opacity: 0.9,
        padding: 2,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    textShare: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    }
});