import { useState } from "react"
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native"

export default function Cadastro() {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        idade: ''
    })

    const [listaUsuarios, setListaUsuarios] = useState([])

    const handleChange = (campo, valor) => {
        setForm((prev) => ({
            ...prev,
            [campo]: valor
        }))
    }

    const adicionar = () => {
        const nomeLimpo = form.nome.trim()
        const emailLimpo = form.email.trim()
        const idadeInt = parseInt(form.idade)

        if (!nomeLimpo || !emailLimpo || isNaN(idadeInt) || idadeInt <= 0) {
            alert("Preencha todos os campos corretamente!")
            return
        }

        const novoUsuario = {
            id: Date.now().toString(),
            nome: nomeLimpo,
            email: emailLimpo,
            idade: idadeInt
        }

        setListaUsuarios((prevLista) => [...prevLista, novoUsuario])

        setForm({ 
            nome: '', 
            email: '', 
            idade: '' })
    }                                               

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>

            <TextInput
                placeholder="Nome"
                value={form.nome}
                onChangeText={(text) => handleChange('nome', text)}
                style={styles.input}
            />

            <TextInput
                placeholder="Email"
                value={form.email}
                onChangeText={(text) => handleChange('email', text)}
                keyboardType="email-address"
                style={styles.input}
            />

            <TextInput
                placeholder="Idade"
                value={form.idade}
                onChangeText={(text) => handleChange('idade', text)}
                keyboardType="numeric"
                style={styles.input}
            />

            <TouchableOpacity
                onPress={adicionar}
                style={styles.botao}
            >
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>

            {listaUsuarios.map((item) => (
                <View key={item.id} style={styles.resultadoContainer}>
                    <Text style={styles.textoResultado}>
                    {
                    `Nome: ${item.nome}
Email: ${item.email}
Idade: ${item.idade} anos`
}
                    </Text>
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
    resultadoContainer: {
        width: "90%",
        marginTop: 15,
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#eee",
    },
    textoResultado: {
        fontSize: 14,
        color: "#333"
    }
})