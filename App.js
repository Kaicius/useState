import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './exemplos/contador';
import { Saudacao } from './exemplos/saudacao';
import Placar from './exercicios/nivel1/placar';
import IMC from './exercicios/nivel1/calculadora_IMC';
import Curtidas from './exercicios/nivel1/curtir';

export default function App() {
  return (

    <>
      {/* <Contador /> */}
      {/* <Saudacao /> */}
      {/* <Placar /> */}
      {/* <IMC /> */}
      <Curtidas />
    </>
  );
}

// const styles = StyleSheet.create({
  
// })