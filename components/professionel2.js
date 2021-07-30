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
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { primaryColor } from '../Constants/Colors';
const Professionel2 = ({ route, navigation }) => {
  const [checked, setChecked] = React.useState('first');
  const [nompartenaire, setnompartenaire] = useState('');
  const [numsiret, setnumsiret] = useState('');
  const [pays, setpays] = useState('');
  const [ville, setville] = useState('');
  const [adresse, setadresse] = useState('');
  const [codepostale, setcodepostale] = useState('');
  const [siteweb, setsiteweb] = useState('');

  const data = {
    checked: checked,
    nompartenaire: nompartenaire,
    numsiret: numsiret,
    pays: pays,
    ville: ville,
    adresse: adresse,
    codepostale: codepostale,
    siteweb: siteweb,
  };

  return (
    <ScrollView>
      <View style={{ color: 'white' }}>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text style={{ marginTop: 10 }}>Nom de partenaire</Text>
          <TextInput
            style={styles.textInput}
            placeholder="veuillez entrer le nom de votre  partenaire"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={nompartenaire => { setnompartenaire(nompartenaire); }}

          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text>Numéro de SIRET</Text>
          <TextInput
            style={styles.textInput}
            placeholder="veuileez entrer votre numéro"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={numsiret => { setnumsiret(numsiret); }}

          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text>Pays</Text>
          <TextInput
            style={styles.textInput}
            placeholder="veuileez entrer le nom de pays"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={pays => { setpays(pays); }}

          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text style={styles.textInputTitle}>Ville</Text>
          <TextInput
            style={styles.textInput}
            placeholder="veuileez entrer votre nom de ville"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={ville => { setville(ville); }}

          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text style={styles.textInputTitle}>Adresse</Text>
          <TextInput
            style={styles.textInput}
            placeholder="veuillez entrer votre adresse"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={adresse => { setadresse(adresse); }}

          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text style={styles.textInputTitle}>Code postale</Text>
          <TextInput
            style={styles.textInput}
            placeholder="veuillez entrer votre code postale"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={codepostale => { setcodepostale(codepostale); }}

          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text style={styles.textInputTitle}>Site web</Text>
          <TextInput
            style={styles.textInput}
            placeholder="veuillez entrer votre site web"
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            onChangeText={siteweb => { setsiteweb(siteweb); }}

          />
        </View>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={{ color: 'black', fontSize: 15 }}>coach</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text style={{ color: 'black', fontSize: 15 }}>Fitness club</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('third')}
            />
            <Text style={{ color: 'black', fontSize: 15 }}>Association</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              value="forth"
              status={checked === 'forth' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('forth')}
            />
            <Text style={{ color: 'black', fontSize: 15 }}>Autre</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.loginBtn}
          onPress={() => navigation.navigate('Partenariat', { dataprof2: data })}>
          <Text style={{ color: 'black', fontSize: 15 }}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

export default Professionel2;
