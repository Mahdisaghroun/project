import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MonEspace({ navigation }) {
      const [user, setuser] = useState({
            "fullname": "",
            "email": "",
            "phone": "",
            "birthdate": "",
            "description": "",
            "country": "",
            "city": "",
            "address": "",
            "postalCode": ""

      })
      useEffect(async () => {
            try {

                  const userInfos = await AsyncStorage.getItem('UserInfos')
                  setuser(JSON.parse(userInfos))
            } catch (e) {
                  // saving error
            }
      }, [])
      return (
            <View>

                  <View style={styles.header}>
                        <Avatar.Image size={60}></Avatar.Image>
                        <View style={{
                              justifyContent: "center",
                              marginLeft: 10
                        }}>
                              <Text>{user?.fullname}</Text>

                        </View>
                  </View>
                  <View style={{ padding: 20 }}>

                        <TouchableOpacity style={styles.itemList} onPress={() => { navigation.navigate('EditInfos') }}>
                              <Text>Mes informations personnelles</Text>
                              <Icon name="keyboard-arrow-right" size={20}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemList} onPress={() => {
                              navigation.navigate('EditPass')
                        }}>
                              <Text>Changer mon mot de passe</Text>
                              <Icon name="keyboard-arrow-right" size={20}></Icon>
                        </TouchableOpacity>

                  </View>
            </View >
      )
}
const styles = StyleSheet.create({
      header: {
            flexDirection: "row",
            //  backgroundColor: primaryColor,
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