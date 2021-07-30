
import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { signin } from '../Services/auth-services';
import { primaryColor } from '../Constants/Colors';

const Login = ({ navigation }) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [Validemail, setValidemail] = useState(true);
  const [Validpassword, setValidpassword] = useState(true);


  const checkForm = () => {
    if (email == "") {
      setValidemail(false)
      return false
    }
    else if (password == "") {
      setValidpassword(false)
      return false
    }
    else return true
  }
  const login_client = async () => {
    if (checkForm)
      signin(email, password).then(async response => {
        console.log(response.data.token)
        await AsyncStorage.setItem('User', email)
        await AsyncStorage.setItem('token', response.data.token)
        navigation.navigate('DashRoute')

      })
        .catch(async error => {
          if (error == "Error: Request failed with status code 404") alert("Compte n'esxiste pas")
          else {
            alert("Votre compte n'est encore vérifié")
          }
        })
  }
  return (
    <View style={{ color: 'white' }}>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content"></StatusBar>
      <Text>Email</Text>
      <TextInput
        style={[styles.textInput, !Validemail && {
          borderBottomColor: "red"
        }]}
        placeholder="Email"
        placeholderTextColor={'rgba(0,0,0,0.2)'}
        onChangeText={email => {
          setValidemail(true)
          setemail(email);
        }}

      />


      <View>
        <Text style={styles.textInputTitle}>Mot de passe</Text>
        <TextInput
          style={[styles.textInput, !Validpassword && {
            borderBottomColor: "red"
          }]}
          placeholder="Mot de passe"
          placeholderTextColor={'rgba(0,0,0,0.2)'}
          onChangeText={password => {
            setValidpassword(true)
            setpassword(password);
          }}

        />
      </View>
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => {
          login_client()
        }}>
        <Text style={{ color: 'black', fontSize: 15 }}>Se connecter</Text>
      </TouchableOpacity>
    </View >
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

export default Login;
