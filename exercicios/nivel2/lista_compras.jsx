import { useState } from "react"
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native"

export default function Lista() {

    const [compras, setCompras] = useState([])
    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState('')

    const adicionar = () => {
        let nomeT = nome.trim()
        let quantidadeN = parseInt(quantidade)

        if (!nomeT || isNaN(quantidadeN) || quantidadeN <= 0) {
            return
        }

        const novo = {
            id: Date.now(),
            nome: nomeT,
            quantidade: quantidadeN,
            comprado: false
        }

        setCompras((prev) => [...prev, novo])

        setNome('')
        setQuantidade('')
    }

    const marcarComprado = (id) => {
        setCompras((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, comprado: !item.comprado }
                    : item
            )
        )
    }

    const remover = (id) => {
        setCompras((prev) =>
            prev.filter((item) => item.id !== id)
        )
    }

    const comprados = compras.filter((item) => item.comprado).length

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Lista de compras</Text>

            <TextInput
                placeholder="Nome do produto"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />

            <TextInput
                placeholder="Quantidade"
                value={quantidade}
                keyboardType="numeric"
                onChangeText={setQuantidade}
                style={styles.input}
            />

            <TouchableOpacity
                onPress={adicionar}
                style={styles.botao}
            >
                <Text style={styles.textoBotao}>Adicionar</Text>
            </TouchableOpacity>

            <Text style={styles.progresso}>
                {comprados} de {compras.length} comprados
            </Text>

            {compras.map((item) => (
                <View key={item.id} style={styles.resultadoContainer}>

                    <Text
                        style={{
                            textDecorationLine: item.comprado
                                ? 'line-through'
                                : 'none'
                        }}
                    >
                        {item.nome} - Quantidade: {item.quantidade}
                    </Text>

                    <TouchableOpacity
                        onPress={() => marcarComprado(item.id)}
                        style={styles.botaoItem}
                    >
                        <Text style={styles.textoBotao}>
                            {item.comprado ? 'Desmarcar' : 'Comprado'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => remover(item.id)}
                        style={styles.botaoRemover}
                    >
                        <Text style={styles.textoBotao}>Remover</Text>
                    </TouchableOpacity>

                </View>
            ))}

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
        fontSize: 26,
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
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 10,
    },
    textoBotao: {
        color: "#fff",
        fontSize: 15,
    },
    progresso: {
        fontSize: 18,
        marginTop: 20,
    },
    resultadoContainer: {
        width: "90%",
        marginTop: 15,
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 8,
        alignItems: "center",
        gap: 8,
    },
    botaoItem: {
        backgroundColor: "#4f2c8b",
        padding: 10,
        borderRadius: 10,
        right: 100
    },
    botaoRemover: {
        backgroundColor: "#34225e",
        padding: 10,
        borderRadius: 10,
        left: 200,
        top: 37,
        position: "absolute"
    },
})