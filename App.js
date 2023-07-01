import React, { useState, useEffect } from "react";
import {
    StatusBar,
    Text,
    TouchableOpacity,
    Share,
    View,
    Vibration,
    Keyboard,
    Pressable,
    FlatList,
} from "react-native";
import { styles } from "./style";
import Imc from "./src/components/IMC";

export default function App() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [resultIMC, setResultIMC] = useState("");
    const [error, setError] = useState("");
    const [imcList, setImcList] = useState([]);

    //!Função que compartilha resultado IMC
    const onShareIMC = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + resultIMC,
        });
    };

    //! Soma o valor IMC
    const handleCalculatorIMC = () => {
        if (weight && height) {
            let heightFormatted = height.replace(",", ".");
            const calculatedIMC = (
                weight /
                (heightFormatted * heightFormatted)
            ).toFixed(2);
            setImcList((prevList) => [
                ...prevList,
                { id: new Date().getTime(), value: calculatedIMC },
            ]);
            setResultIMC(calculatedIMC);
            console.log(imcList);
        } else {
            setError("Campo obrigatório*");
            Vibration.vibrate();
        }
    };

    const handleSelectPage = () => {
        if (resultIMC) {
            setResultIMC("");
            setHeight("");
            setWeight("");
        } else {
            handleCalculatorIMC();
        }
    };

    //! Verifica se os campos estão preenchidos
    useEffect(() => {
        if (height.length === 0 || weight.length === 0) {
            setResultIMC("");
        }
    }, [height, weight]);

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>ONEBITALTH</Text>
                </View>
                <View style={styles.content}>
                    {resultIMC ? (
                        <View>
                            <View>
                                <Text
                                    style={{
                                        marginTop: 60,
                                        fontSize: 28,
                                        textAlign: "center",
                                        opacity: 0.6,
                                    }}
                                >
                                    Seu IMC é igual:
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 40,
                                        textAlign: "center",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {resultIMC}
                                </Text>
                            </View>
                            <View style={styles.containerShare}>
                                <TouchableOpacity
                                    style={styles.buttonShare}
                                    onPress={onShareIMC}
                                >
                                    <Text style={styles.textShare}>Compartilhar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <>
                            <Imc
                                error={error}
                                height={height}
                                weight={weight}
                                setHeight={setHeight}
                                setWeight={setWeight}
                            />
                            <Text style={styles.resultIMC}>Digite sua altura e peso</Text>
                        </>
                    )}
                    <View style={{ height: 1000 }}>
                        <TouchableOpacity style={styles.button} onPress={handleSelectPage}>
                            <Text style={styles.buttonText}>
                                {resultIMC ? "Calcular novamente" : "Calcular IMC"}
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                style={{ height: "100%" }}
                                data={imcList.reverse()}
                                renderItem={({ item }) => {
                                    return (
                                        <Text style={{ marginTop: 100 }}>
                                            Resultado IMC:
                                            <Text>{" " + item.value}</Text>
                                        </Text>
                                    );
                                }}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <StatusBar barStyle="auto" />
        </Pressable>
    );
}
