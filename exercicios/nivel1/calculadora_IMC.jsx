import { useState } from "react"
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native"

export default function IMC () {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [IMC, setIMC] = useState(null)

    const calcularIMC = () => {
        const pesoF = parseFloat(peso.replace(",", "."))
        let alturaF = parseFloat(altura.replace(",", "."))


        if (!pesoF || !alturaF) {
            alert("Digite valores validos")
        }

        if (alturaF > 3) {
            alturaF = alturaF / 100
        }

        const resultado = pesoF / (alturaF * alturaF)
        setIMC(resultado)
    }

    const indice = () => {
        if (IMC == null) return ""

        if (IMC < 18.5) return "Abaixo do peso";
        if (IMC < 25) return "Peso Normal";
        if (IMC < 30) return "Sobrepeso";
        if (IMC < 35) return "Obesidade grau I";
        if (IMC < 40) return "Obesidade grau II";
        return "Obesidade grau III";
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Digite sua altura (ex: 1.70)"
                value={altura}
                keyboardType="numeric"
                onChangeText={setAltura}
                style={styles.input}
            />

            <TextInput 
                placeholder="Digite seu peso (ex: 60.5)"
                value={peso}
                keyboardType="numeric"
                onChangeText={setPeso}
                style={styles.input}
            />

            <TouchableOpacity onPress={calcularIMC} style={styles.botao}><Text style={styles.textoBotao}>Enviar</Text></TouchableOpacity>

            {IMC !== null && (
                <View style={styles.resultadoContainer}>
                <Text style={styles.sub_titulo}>IMC: {IMC.toFixed(2)}</Text>
                <Text style={styles.classificacao}>{indice()}</Text>
              </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
      },
      titulo: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
      },
      input: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#fff",
      },
      botao: {
        width: "80%",
        height: 50,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 10,
      },
      textoBotao: {
        color: "#fff",
        fontSize: 18
      },
      resultadoContainer: {
        marginTop: 30,
        alignItems: "center",
      },
      sub_titulo: {
        fontSize: 24,
        fontWeight: "bold",
      },
      classificacao: {
        fontSize: 20,
        color: "#0202029d",
        marginTop: 5,
      },
});