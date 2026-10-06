import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


export function Saudacao() {
    const [nome, setNome] = useState("")

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
            />
            <Text>{nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        "flex": 1,
        "display": "flex",
        "justifyContent": 'center',
        "alignItems": 'center'
    },
    text: {
        "fontSize": 32
    }
})