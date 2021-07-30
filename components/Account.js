import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { primaryColor } from '../Constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Account({ navigation }) {
      const [user, setUser] = useState("")
      useEffect(async () => {
            try {

                  const user = await AsyncStorage.getItem('User')
                  setUser(user)
            } catch (e) {
                  // saving error
            }
      }, [])
      return (
            <View style={styles.container}>
                  <View style={styles.header}>
                        <Avatar.Image size={60}></Avatar.Image>
                        <View style={{
                              justifyContent: "center",
                              marginLeft: 10
                        }}>
                              <Text>{user}</Text>
                              <Text>Voir le profil</Text>
                        </View>
                  </View>
                  <View style={{ padding: 20 }}>
                        <Text style={styles.bigTitle}>Langues</Text>
                        <TouchableOpacity style={styles.itemList}>
                              <Text>Langue de l'App</Text>
                              <Text>Francais</Text>
                        </TouchableOpacity>
                        <Text style={styles.bigTitle}>Apropos</Text>
                        <TouchableOpacity style={styles.itemList}>
                              <Text>CGI</Text>
                              <Icon name="keyboard-arrow-right" size={20}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemList}>
                              <Text>CGV</Text>
                              <Icon name="keyboard-arrow-right" size={20}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemList} onPress={() => {
                              navigation.navigate('Qui somme nous')
                        }}>
                              <Text>Qui sommes nous</Text>
                              <Icon name="keyboard-arrow-right" size={20}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemList}>
                              <Text>A propos des professionnels</Text>
                              <Icon name="keyboard-arrow-right" size={20}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemList}>
                              <Text>A propos des pratiquants</Text>
                              <Icon name="keyboard-arrow-right" size={20}></Icon>
                        </TouchableOpacity>
                        <Text style={styles.bigTitle}>Déconnexion</Text>
                        <TouchableOpacity style={styles.itemList} onPress={() => {
                              AsyncStorage.clear()
                              navigation.navigate('Landing')

                        }}>
                              <Text>Déconnexion</Text>
                              <Icon name="keyboard-arrow-right" size={20}></Icon>
                        </TouchableOpacity>
                  </View>

            </View >
      )
}
const styles = StyleSheet.create({
      header: {
            flexDirection: "row",
            backgroundColor: primaryColor,
            padding: 20,
            paddingTop: 50
      },
      itemList: {
            flexDirection: "row",
            padding: 8,
            borderBottomColor: "#a4a4a4",
            borderBottomWidth: 1,
            justifyContent: 'space-between',
            marginBottom: 10
      },
      bigTitle: {
            fontSize: 18,
            fontWeight: "400",
            marginBottom: 20
      },
      container: {
            flex: 1,

      }
})
