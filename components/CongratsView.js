import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, StatusBar } from 'react-native'
import { primaryColor } from '../Constants/Colors'

export default function CongratsView({ navigation }) {
      return (
            <View style={styles.container}>
                  <StatusBar backgroundColor={"transparent"} barStyle="dark-content"></StatusBar>
                  <Text style={styles.text1}>Inscription terminée avec succès.</Text>
                  <Text styles={styles.text2}>Veuillez vous connecter à votre compte pour utiliser nos fonctionnalités.</Text>
                  <TouchableOpacity style={styles.btnToLogin} onPress={() => {
                        navigation.navigate('Login')
                  }}>
                        <Text style={styles.textBtn}>Se connecter</Text>
                  </TouchableOpacity>
            </View >
      )
}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: "center",
            padding: 20
      },
      text1: {
            fontSize: 18,
            color: "#111",
            fontWeight: '700'
      },
      text2: {
            fontSize: 14,
            color: "#a4a4a4",
            marginTop: 5
      },
      btnToLogin: {
            backgroundColor: primaryColor,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            height: 48


      },
      textBtn: {
            color: "#fff",

      }
})
