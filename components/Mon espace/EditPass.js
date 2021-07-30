import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Switch } from 'react-native'
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, TouchableOpacity, email } from 'react-native';
import { primaryColor } from '../../Constants/Colors';

import { changePassword, editInfos } from '../../Services/auth-services';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditPass() {
      const [newPass, setnewPass] = useState()
      const [cnewPass, setcnewPass] = useState()
      const editPass = () => {
            if (newPass === cnewPass)
                  changePassword(newPass).then(res => {
                        alert('Mot de passe changé !')
                  }).catch('Erreur')
            else alert('Mot de passes ne sont pas identiques ! ')
      }
      return (
            <View>
                  <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                              <Icon name="arrow-back" size={25}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => editPass()}>
                              <Icon name="save" size={25}></Icon>
                        </TouchableOpacity>
                  </View>
                  <View style={{ marginTop: 10, marginLeft: 15 }}>
                        <Text>Ancien mot de passe</Text>
                        <TextInput
                              style={[styles.textInput]}
                              placeholder="Veuillez entrer votre Ancien mot de passe"
                              placeholderTextColor={'rgba(0,0,0,0.2)'}


                        />
                  </View>
                  <View style={{ marginTop: 10, marginLeft: 15 }}>
                        <Text>Nouveau mot de passe</Text>
                        <TextInput
                              style={[styles.textInput]}
                              placeholder="Veuillez entrer votre Nouveau mot de passe"
                              placeholderTextColor={'rgba(0,0,0,0.2)'}
                              onChangeText={email => {
                                    setnewPass(email)

                              }}
                              onChangeText={
                                    (text) => {
                                          setnewPass(text)
                                    }
                              }

                        />
                  </View>
                  <View style={{ marginTop: 10, marginLeft: 15 }}>
                        <Text>Confirmer mot de passe</Text>
                        <TextInput
                              style={[styles.textInput]}
                              placeholder="Veuillez Confirmer mot de passe"
                              placeholderTextColor={'rgba(0,0,0,0.2)'}
                              onChangeText={email => {

                                    setnewPass(email);
                              }}
                              onChangeText={
                                    (text) => {
                                          setcnewPass(text)
                                    }
                              }

                        />
                  </View>
            </View>
      )
}
const styles = StyleSheet.create({
      header: {
            flexDirection: "row",
            backgroundColor: primaryColor,
            padding: 20,
            paddingTop: 50,
            justifyContent: 'space-between',
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

      },
      card: {

      },
      textInputcontainer: {
            //width,
            flex: 1,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
      },
      textInput: {
            borderBottomWidth: 1,
            height: 40,
            color: 'rgba(0,0,0,0.8)',
            //fontFamily: STGFonts.RobotoRegular,
            fontSize: 14,
            fontWeight: '500',
            letterSpacing: 1,
            paddingHorizontal: 5,
            marginBottom: 10,
      },
      textInputTitle: {
            color: 'rgba(0,0,0,0.8)',
            // fontFamily: STGFonts.RobotoRegular,
            fontSize: 14,
            fontWeight: '700',
            letterSpacing: 1,
            marginTop: 20,
      },
      Title: {
            alignSelf: "center",
            fontSize: 20,
            fontWeight: "700",
            marginBottom: 10,
      }
})