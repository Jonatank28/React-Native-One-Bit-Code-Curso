import React, { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./style";

function IMC() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [resultIMC, setResultIMC] = useState("");

    const handleCalculatorIMC = () => {
        const calculatedIMC = (weight / (height * height)).toFixed(2);
        setResultIMC(calculatedIMC);
    };

    useEffect(() => {
        if (height.length === 0 || weight.length === 0) {
            setResultIMC("");
        }
    }, [height, weight]);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text>Altura</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        keyboardType="numeric"
                        placeholder="Ex. 1.75"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Peso</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        keyboardType="numeric"
                        placeholder="Ex. 75.33"
                    />
                </View>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: height.length == 0 || weight.length == 0 ? "gray" : "blue" }]}
                    onPress={handleCalculatorIMC}
                    disabled={height.length > 0 && weight.length > 0 ? false : true}
                >
                    <Text style={styles.buttonText}>Calcular IMC</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.resultIMC}>{!resultIMC ? "Digite sua altura e peso" : 'Seu IMC é: ' + resultIMC}</Text>
        </>
    );
}

export default IMC

