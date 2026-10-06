import { useState } from "react"
import { Text, StyleSheet, View, TouchableOpacity } from "react-native"
import { FontAwesome6 } from "@expo/vector-icons";

export default function Curtidas () {

    const [curtido, setCurtido] = useState(false)
    const [curtidas, setCurtidas] = useState(0)



    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Curidas: {curtidas}</Text>

            

            {curtido == true ? (
                <View style={styles.resultadoContainer}>
                    <FontAwesome6 
                    name="heart"
                    solid={curtido}
                    size={20}
                    color="red"
                    />   
                </View>
            ): <TouchableOpacity onPress={() => {setCurtido(true)}}>
            <FontAwesome6 
                name="heart"
                size={20}
                color="red"
                />
        </TouchableOpacity>}

            <TouchableOpacity onPress={() => {setCurtidas(curtidas + 1)}}><Text>Curtir</Text></TouchableOpacity>
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
    titulo: {
        fontSize: 32
    }
})