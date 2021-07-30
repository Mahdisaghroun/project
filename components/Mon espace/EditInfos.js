import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, Switch } from 'react-native'
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, TouchableOpacity, email } from 'react-native';
import { primaryColor } from '../../Constants/Colors';

import { editInfos } from '../../Services/auth-services';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function EditInfos({ navigation }) {
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
      const [isEnabled1, setIsEnabled1] = useState(true);
      const [isEnabled2, setIsEnabled2] = useState(true);
      const [isEnabled3, setIsEnabled3] = useState(true);
      const [isEnabled4, setIsEnabled4] = useState(true);
      const [isEnabled40, setIsEnabled40] = useState(true);
      const [isEnabled5, setIsEnabled5] = useState(true);
      const [isEnabled6, setIsEnabled6] = useState(true);
      const [isEnabled7, setIsEnabled7] = useState(true);
      const [isEnabled8, setIsEnabled8] = useState(true);
      const editProfile = () => {
            editInfos(user).then(async res => {
                  await AsyncStorage.setItem('UserInfos', JSON.stringify(user))
                  alert('Profil modifié !')
            }).catch(err => alert(err))
      }
      return (
            <View>
                  <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                              <Icon name="arrow-back" size={25}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => editProfile()}>
                              <Icon name="save" size={25}></Icon>
                        </TouchableOpacity>
                  </View>
                  <ScrollView style={{
                        padding: 20,
                        paddingBottom: 80
                  }}>

                        <View style={[styles.card, {

                        }]}>
                              <Icon name="camera-alt" style={{
                                    alignSelf: "flex-end",
                                    fontSize: 25
                              }} />
                              <Avatar.Image size={80} style={{
                                    marginTop: 10,
                                    alignSelf: "center",
                                    backgroundColor: "#fff",
                                    marginBottom: 10
                              }}></Avatar.Image>


                        </View>
                        <View style={styles.card}>
                              <Text style={styles.Title}>Mes coordonnées personnelles</Text>
                              < View style={{ marginTop: 10, }}>
                                    {isEnabled1 && <>
                                          <Text>Nom</Text>
                                          <TextInput
                                                style={[styles.textInput]}
                                                placeholder="Veuillez entrer votre email"
                                                placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                onChangeText={email => {
                                                      setuser({
                                                            ...user,
                                                            fullname: email
                                                      })

                                                }}
                                                value={user?.fullname}
                                          /></>}
                                    <View style={{
                                          flexDirection: "row",
                                          justifyContent: "flex-end"
                                    }}>

                                          <Text>
                                                Afficher nom
                                          </Text>
                                          <Switch
                                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                                thumbColor={isEnabled1 ? "green" : "#f4f3f4"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={() => setIsEnabled1(!isEnabled1)}
                                                value={isEnabled1}
                                          />
                                    </View>

                              </View>
                              <View style={{ marginTop: 10, }}>
                                    {isEnabled2 &&
                                          <>
                                                <Text>Email</Text>
                                                <TextInput
                                                      style={[styles.textInput]}
                                                      placeholder="Veuillez entrer votre email"
                                                      placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                      onChangeText={email => {
                                                            setuser({
                                                                  ...user,
                                                                  email: email
                                                            })

                                                      }}

                                                />
                                          </>}
                                    <View style={{
                                          flexDirection: "row",
                                          justifyContent: "flex-end"
                                    }}>

                                          <Text>
                                                Afficher email
                                          </Text>
                                          <Switch
                                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                                thumbColor={isEnabled2 ? "green" : "#f4f3f4"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={() => setIsEnabled2(!isEnabled2)}
                                                value={isEnabled2}
                                          />
                                    </View>

                              </View>
                              <View style={{ marginTop: 10, }}>
                                    {isEnabled3 &&
                                          <>
                                                < Text > Téléphone</Text>
                                                <TextInput
                                                      style={[styles.textInput]}
                                                      placeholder="Veuillez entrer votre Téléphone"
                                                      placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                      onChangeText={email => {
                                                            setuser({
                                                                  ...user,
                                                                  phone: email
                                                            })

                                                      }}

                                                />
                                          </>}
                                    <View style={{
                                          flexDirection: "row",
                                          justifyContent: "flex-end"
                                    }}>

                                          <Text>
                                                Afficher Téléphone
                                          </Text>
                                          <Switch
                                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                                thumbColor={isEnabled3 ? "green" : "#f4f3f4"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={() => setIsEnabled3(!isEnabled3)}
                                                value={isEnabled3}
                                          />
                                    </View>
                              </View>
                              <View style={{ marginTop: 10, }}>
                                    {isEnabled40 &&
                                          <>
                                                < Text > Ma date de naissance</Text>
                                                <TextInput
                                                      style={[styles.textInput]}
                                                      placeholder="Veuillez entrer votre date de naissance"
                                                      placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                      onChangeText={email => {
                                                            setuser({
                                                                  ...user,
                                                                  birthdate: email
                                                            })

                                                      }}

                                                />
                                          </>}
                                    <View style={{
                                          flexDirection: "row",
                                          justifyContent: "flex-end"
                                    }}>

                                          <Text>
                                                Afficher date de naissance
                                          </Text>
                                          <Switch
                                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                                thumbColor={isEnabled40 ? "green" : "#f4f3f4"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={() => setIsEnabled40(!isEnabled40)}
                                                value={isEnabled40}
                                          />
                                    </View>
                              </View>
                              <View style={styles.card}>
                                    <Text style={styles.Title}>A propos de moi</Text>
                                    <View style={{ marginTop: 10, }}>
                                          {isEnabled4 &&
                                                <>
                                                      <Text>Description</Text>
                                                      <TextInput
                                                            style={[styles.textInput]}
                                                            placeholder="Veuillez entrer votre Description"
                                                            placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                            onChangeText={email => {
                                                                  setuser({
                                                                        ...user,
                                                                        description: email
                                                                  })

                                                            }}

                                                      />
                                                </>}
                                          <View style={{
                                                flexDirection: "row",
                                                justifyContent: "flex-end"
                                          }}>

                                                <Text>
                                                      Afficher date de naissance
                                                </Text>
                                                <Switch
                                                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                                                      thumbColor={isEnabled4 ? "green" : "#f4f3f4"}
                                                      ios_backgroundColor="#3e3e3e"
                                                      onValueChange={() => setIsEnabled4(!isEnabled4)}
                                                      value={isEnabled4}
                                                />
                                          </View>
                                    </View>

                              </View>
                              <View style={styles.card}>
                                    <Text style={styles.Title}>Mon adresse</Text>
                                    <View style={{ marginTop: 10, }}>
                                          {isEnabled5 && <>
                                                < Text > Pays</Text>
                                                <TextInput
                                                      style={[styles.textInput]}
                                                      placeholder="Veuillez entrer votre Pays"
                                                      placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                      onChangeText={email => {
                                                            setuser({
                                                                  ...user,
                                                                  country: email
                                                            })

                                                      }}

                                                />
                                          </>}
                                          <View style={{
                                                flexDirection: "row",
                                                justifyContent: "flex-end"
                                          }}>

                                                <Text>
                                                      Afficher pays
                                                </Text>
                                                <Switch
                                                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                                                      thumbColor={isEnabled5 ? "green" : "#f4f3f4"}
                                                      ios_backgroundColor="#3e3e3e"
                                                      onValueChange={() => setIsEnabled5(!isEnabled5)}
                                                      value={isEnabled5}
                                                />
                                          </View>

                                    </View>
                                    <View style={{ marginTop: 10, }}>
                                          {isEnabled6 && <>
                                                < Text > Ville</Text>
                                                <TextInput
                                                      style={[styles.textInput]}
                                                      placeholder="Veuillez entrer votre Ville"
                                                      placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                      onChangeText={email => {
                                                            setuser({
                                                                  ...user,
                                                                  city: email
                                                            })

                                                      }}

                                                /></>}
                                          <View style={{
                                                flexDirection: "row",
                                                justifyContent: "flex-end"
                                          }}>

                                                <Text>
                                                      Afficher ville
                                                </Text>
                                                <Switch
                                                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                                                      thumbColor={isEnabled6 ? "green" : "#f4f3f4"}
                                                      ios_backgroundColor="#3e3e3e"
                                                      onValueChange={() => setIsEnabled6(!isEnabled6)}
                                                      value={isEnabled6}
                                                />
                                          </View>

                                    </View>
                                    <View style={{ marginTop: 10, }}>
                                          {isEnabled7 &&
                                                <>
                                                      <Text>Adresse</Text>
                                                      <TextInput
                                                            style={[styles.textInput]}
                                                            placeholder="Veuillez entrer votre Adresse"
                                                            placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                            onChangeText={email => {
                                                                  setuser({
                                                                        ...user,
                                                                        address: email
                                                                  })

                                                            }}

                                                      /></>}
                                          <View style={{
                                                flexDirection: "row",
                                                justifyContent: "flex-end"
                                          }}>

                                                <Text>
                                                      Afficher Adresse
                                                </Text>
                                                <Switch
                                                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                                                      thumbColor={isEnabled7 ? "green" : "#f4f3f4"}
                                                      ios_backgroundColor="#3e3e3e"
                                                      onValueChange={() => setIsEnabled7(!isEnabled7)}
                                                      value={isEnabled7}
                                                />
                                          </View>

                                    </View>
                                    <View style={{ marginTop: 10, }}>
                                          {isEnabled8 &&
                                                <>
                                                      < Text > Code postal</Text>
                                                      <TextInput
                                                            style={[styles.textInput]}
                                                            placeholder="Veuillez entrer votre code postal"
                                                            placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                            onChangeText={email => {
                                                                  setuser({
                                                                        ...user,
                                                                        postalCode: email
                                                                  })

                                                            }}


                                                      />
                                                </>
                                          }
                                          <View style={{
                                                flexDirection: "row",
                                                justifyContent: "flex-end"
                                          }}>

                                                <Text>
                                                      Afficher Code postal
                                                </Text>
                                                <Switch
                                                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                                                      thumbColor={isEnabled8 ? "green" : "#f4f3f4"}
                                                      ios_backgroundColor="#3e3e3e"
                                                      onValueChange={() => setIsEnabled8(!isEnabled8)}
                                                      value={isEnabled8}
                                                />
                                          </View>


                                    </View>




                              </View>
                              <View style={styles.card}>
                                    <Text style={styles.Title}>Mon emplacement</Text>
                                    <View style={{ marginTop: 10, }}>
                                          <Text>Description</Text>
                                          <TextInput
                                                style={[styles.textInput]}
                                                placeholder="Veuillez entrer votre emplacement"
                                                placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                onChangeText={email => {


                                                }}

                                          />
                                    </View>

                              </View>
                        </View>
                  </ScrollView >
            </View >
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