import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function UndreConst() {
      return (
            <View style={style.container}>
                  <Text style={style.text1}>Cette fonctionnalité n'est pas encore disponible</Text>
                  <Text style={style.text2}>Nous travaillons pour le développer dès que possible</Text>
            </View >
      )
}
const style = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 30
      },
      text1: {
            fontSize: 28,
            fontWeight: "700",
            color: "#111",
            textAlign: "left"
      },
      text2: {
            fontSize: 18,

            color: "#a4a4a4",
            marginTop: 5,
            textAlign: "left"

      }
})