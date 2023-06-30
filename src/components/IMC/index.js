import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

function IMC({ error, height, weight, setWeight, setHeight }) {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.textInput}>Altura</Text>
                {
                    error && height.length == 0 && (
                        <Text style={styles.errorText}>{error}</Text>
                    )
                }
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    keyboardType="numeric"
                    placeholder="Ex. 1.75"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.textInput}>Peso</Text>
                {
                    error && weight.length == 0 && (
                        <Text style={styles.errorText}>{error}</Text>
                    )
                }
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    keyboardType="numeric"
                    placeholder="Ex. 75.33"
                />
            </View>
        </View>
    );
}

export default IMC

