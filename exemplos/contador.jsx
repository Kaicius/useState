import { useState } from "react"
import { Text, StyleSheet, View, TouchableOpacity } from "react-native"

export default function Contador () {

    const [contador, setContador] = useState(0)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setContador(contador - 1)}><Text style={styles.text}>-</Text></TouchableOpacity>
            <Text style={styles.text}>Contador: {contador}</Text>
            <TouchableOpacity onPress={() => setContador(contador + 1)}><Text style={styles.text}>+</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setContador(0)}><Text style={styles.text}>Zero</Text></TouchableOpacity>
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