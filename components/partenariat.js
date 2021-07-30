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
import { Checkbox } from 'native-base';
import Modal from 'react-native-modal';
import { primaryColor } from '../Constants/Colors';
const Partenariat = ({ route, navigation }) => {
  const [checked, setChecked] = React.useState('first');
  const [isModalVisible, setModalVisible] = useState(false);
  const { dataprof, dataprof2 } = route.params;
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const register = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname: dataprof.nom,
        email: dataprof.email,
        password: dataprof.password,
        phone: dataprof.phone,
        type: 'PROFESSIONEL',
        passwordHash: dataprof.password,
        partnershipName: dataprof2.nompartenaire,
        siretNumber: dataprof2.nompartenaire,
        country: dataprof2.pays,
        city: dataprof2.ville,
        address: dataprof2.adresse,
        postalCode: dataprof2.codepostale,
        website: dataprof2.siteweb,
      }),
    };
    console.log('data', requestOptions.body);
    await fetch('https://sport-to-go-api.herokuapp.com/auth/register', requestOptions)
      .then(response => response.json())
      .then(data => console.log('data', data))
      .catch(error => {
        console.error('errrrrr', error);
      });
  };

  return (
    <ScrollView>
      <View style={{ color: 'white' }}>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text style={{ marginTop: 10 }}>Partenariat</Text>
          <View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={{ color: 'black', fontSize: 15 }}>Local {'\n'} 648£ HT par an</Text>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text style={{ color: 'black', fontSize: 15 }}>Régional(à partir de 3 structures)-5% {'\n'} 612 £ Ht club par an</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <RadioButton
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
              <Text style={{ color: 'black', fontSize: 15 }}> National (à partir de 10 clubs)-10% {'\n'} 582 £ Ht club par an</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <RadioButton
                value="forth"
                status={checked === 'forth' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('forth')}
              />
              <Text style={{ color: 'black', fontSize: 15 }}>Association {'\n'} 72 £ Ht par an</Text>
            </View>

            <Text>Total à payer</Text>

          </View>
          <TouchableOpacity style={styles.loginBtn}
            onPress={toggleModal}>
            <Text style={{ color: 'black', fontSize: 15 }}>Payer</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 180, marginTop: 20 }}>--OU--</Text>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={{ color: 'black', fontSize: 15 }}>Entrez votre code de régistration gratuit</Text>
          </TouchableOpacity>

        </View>
        <View />
        <View style={{ flex: 1 }}>


          <Modal isVisible={isModalVisible}>
            <View style={styles.modalView}>
              <Text>Enter your card</Text>
              <Text>ghada</Text>

              <Button title="cancel" onPress={toggleModal} />
              <Button title="Enregister" onPress={register} />

            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
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

export default Partenariat;
