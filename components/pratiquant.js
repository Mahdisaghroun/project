/* eslint-disable prettier/prettier */
// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { primaryColor } from '../Constants/Colors';
import { register_as_pratiquant } from '../Services/auth-services';
import { StatusBar } from 'react-native';
const Pratiquant = ({ navigation }) => {

  const [nom, setnom] = useState('');
  const [phone, setphone] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [PassConfirm, setPassConfirm] = useState('');
  const [loading, setloading] = useState(false)
  const [ValidNom, setValidNom] = useState(true);
  const [ValidPhone, setValidPhone] = useState(true);
  const [ValidEmail, setValidEmail] = useState(true);
  const [ValidPass, setValidPass] = useState(true);
  const [ValidPassConfirm, setValidPassConfirm] = useState(true);

  const checkForm = () => {
    if (nom == "") {
      setValidNom(false)
      return false
    }
    else if (phone == "") {
      setValidPhone(false)
      return false
    }
    else if (Email == "") {
      setValidEmail(false)
      return false
    }
    else if (password == "") {
      setValidPass(false)
      return false
    }
    else if (PassConfirm == "" || PassConfirm != password) {
      setValidPassConfirm(false)
      return false
    }
    else return true
  }
  const login = () => {
    if (checkForm()) {
      setloading(true)
      register_as_pratiquant(nom, phone, Email, password).then(response => navigation.navigate('Félécitations'))

        .catch(error => {
          console.error('errrrrr', error);
        });
    }
  }

  return (
    <ScrollView>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content"></StatusBar>
      <View style={{ color: 'white' }}>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text style={{ marginTop: 10 }}>Nom</Text>
          <TextInput
            style={[styles.textInput, !ValidNom && {
              borderBottomColor: "red"
            }]}
            placeholder="Veuillez entrer votre nom"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={nom => {
              setnom(nom)
              setValidNom(true)
            }}
          />

        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text>Téléphone</Text>
          <TextInput
            style={[styles.textInput, !ValidPhone && {
              borderBottomColor: "red"
            }]}
            placeholder="Veuillez entrer votre nom"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={phone => {
              setphone(phone)
              setValidPhone(true)
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text>Email</Text>
          <TextInput
            style={[styles.textInput, !ValidEmail && {
              borderBottomColor: "red"
            }]}
            placeholder="Veuillez entrer votre email"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={Email => {
              setEmail(Email)
              setValidEmail(true)
            }}

          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text style={styles.textInputTitle}>Mot de passe</Text>
          <TextInput
            style={[styles.textInput, !ValidPass && {
              borderBottomColor: "red"
            }]}
            placeholder="Veuillez entrer votre mot de passe"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={password => {
              setpassword(password)
              setValidEmail(true)
            }}
            secureTextEntry

          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text style={styles.textInputTitle}> Confirmation Mot de passe</Text>
          <TextInput
            style={[styles.textInput, !ValidPassConfirm && {
              borderBottomColor: "red"
            }]}
            placeholder="Comfirmez le mot de passe"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={password => { setPassConfirm(password) }}
            secureTextEntry

          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => {
          login()
        }}>
          {!loading && <Text style={{ color: 'black', fontSize: 15 }}>Enregistrer</Text>}
          {loading && <ActivityIndicator color="#fff" size="large" animating></ActivityIndicator>}
        </TouchableOpacity>
      </View>
    </ScrollView >
  );
};
const styles = StyleSheet.create({
  logo: {
    height: 132,
    width: 132,
    alignSelf: 'center',
    position: 'absolute',
    top: 60,
  },

  loginBtn: {
    width: '95%',
    backgroundColor: primaryColor,
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 10,
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
  btnContainer: {
    //width: width - 30,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBg: {
    //width: width - 30,
    height: 60,
  },
  btnText: {
    color: 'white',
    //fontFamily: STGFonts.RobotoRegular,
    fontWeight: 'bold',
    fontSize: 18,
  },
  forgotPasswordBtn: {
    alignItems: 'stretch',
    marginVertical: 20,
    marginLeft: 70,
  },
  forgotPasswordText: {
    //fontFamily: STGFonts.RobotoLight,
    fontSize: 14,
    textAlign: 'center',
  },
  header: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  headerIcon: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    //fontFamily: STGFonts.RobotoRegular,
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'stretch',
    textAlign: 'center',
    marginVertical: 15,
  },
  errors: {
    //fontFamily: STGFonts.RobotoRegular,
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(220,20,60,0.8)',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  helper: {
    //fontFamily: STGFonts.RobotoRegular,
    fontSize: 12,
    color: 'rgba(220,20,60,0.8)',
  },
});

export default Pratiquant;
