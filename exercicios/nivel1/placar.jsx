import { useState } from "react"
import { Text, StyleSheet, View, TouchableOpacity } from "react-native"

export default function Placar () {

    const [pontos, setPontos] = useState(0)
    const [pontos2, setPontos2] = useState(0)

    if (pontos < 0) {
        setPontos(0)
        console.log("deu negativo");  
    }

    if (pontos2 < 0) {
        setPontos2(0)
        console.log("deu negativo 2");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>TIME 1</Text>
            <View style={styles.container2}>
                <TouchableOpacity onPress={() => setPontos(pontos - 1)}><Text style={styles.sub_sub_titulo}>-</Text></TouchableOpacity>
                <Text style={styles.sub_titulo}>Pontos: {pontos}</Text>
                <TouchableOpacity onPress={() => setPontos(pontos + 1)}><Text style={styles.sub_sub_titulo}>+</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setPontos(0)}><Text style={styles.sub_sub_titulo}>Zero</Text></TouchableOpacity>
            </View>
            
            <Text>{"\n"}</Text>

            <Text style={styles.titulo}>TIME 2</Text>

            <View style={styles.container2}>
                <TouchableOpacity onPress={() => setPontos2(pontos2 - 1)}><Text style={styles.sub_sub_titulo}>-</Text></TouchableOpacity>
                <Text style={styles.sub_titulo}>Pontos: {pontos2}</Text>
                <TouchableOpacity onPress={() => setPontos2(pontos2 + 1)}><Text style={styles.sub_sub_titulo}>+</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setPontos2(0)}><Text style={styles.sub_sub_titulo}>Zero</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        "flex": 1,
        "display": "flex",
        "justifyContent": 'center',
        "alignItems": 'center',
        "backgroundColor": ""
    },
    container2: {
        "display": "flex",
        "justifyContent": 'center',
        "alignItems": 'center',
        "flexDirection": 'row',
        "gap": 25
    },
    titulo: {
        "fontSize": 40
    },
    sub_titulo: {
        "fontSize": 32
    },
    sub_sub_titulo: {
        "fontSize": 25
    }
})