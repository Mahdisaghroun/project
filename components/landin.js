/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar
} from 'react-native';

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent"></StatusBar>
      <View>
        <ImageBackground
          style={styles.btnContainer}
          source={require('@images/landing/map.png')}
          imageStyle={styles.btnBgb}
          resizeMode={'stretch'}>
          <ImageBackground
            style={styles.btnContainer}
            source={require('@images/landing/woman.png')}
            imageStyle={styles.btnBg}
            resizeMode={'stretch'}>
            <View>
              <Image
                source={require('@images/landing/logo.png')}
                resizeMode={'contain'}
                style={styles.logo}
              />
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={styles.loginBtn}
                  onPress={() => navigation.navigate('Créer un compte Profossionnel')}
                >
                  <Text style={{ color: 'white' }}>Vous etes professionels?</Text>
                  <Text style={{ color: 'white', fontSize: 10 }}>
                    creer votre compte
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.loginBtn}
                  onPress={() => navigation.navigate('Créer un compte Pratiquant')}
                >
                  <Text style={{ color: 'white' }}>Vous etes un pratiquant?</Text>
                  <Text style={{ color: 'white', fontSize: 10 }}>
                    creer votre compte
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.loginBtn}
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={{ color: 'white' }}>
                    Vous etes deja inscrit/se connecter
                  </Text>
                  <Text style={{ color: 'white', fontSize: 10 }}>
                    creer votre compte
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20, marginLeft: 30 }}>
                <Text style={styles.socialText}>SUIVEZ-NOUS SUR</Text>
                <Text style={styles.socialText}>LES RESEAUX SOCIAUX</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Image
                    source={require('@images/landing/fb.png')}
                    resizeMode={'contain'}
                    style={styles.socialBtnn}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('@images/landing/instagram.png')}
                    resizeMode={'contain'}
                    style={styles.socialBtn}
                  />
                </TouchableOpacity>
              </View>
              <Image
                source={require('@images/landing/img_bottom.png')}
                resizeMode={'contain'}
                style={styles.imgBottom}
              />
            </View>
          </ImageBackground>
        </ImageBackground>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  loginBtn: {
    width: 300,
    backgroundColor: 'black',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
  },
  //container: { flex: 1, backgroundColor: colors.background },
  logo: {
    height: 132,
    width: 132,
    marginTop: 1,
    alignSelf: 'center',
  },
  btnGroup: {
    width: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    width: 400,
    height: 1090,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainerb: {
    width: 400,
    height: 1090,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBg: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 800,
    width: 310,
    marginTop: 178,

  },
  btnBgb: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 1000,
    width: 399,
    marginTop: 1,

  },

  btnText: {
    color: 'white',
    //fontFamily: STGFonts.RobotoRegular,
    fontWeight: 'bold',
  },
  btnTextSize1: {
    fontSize: 14,
  },
  btnTextSize2: {
    fontSize: 9,
  },
  btnSocialGroup: {
    width: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    color: 'white',
    //fontFamily: STGFonts.RobotoRegular,
    fontSize: 14,
    textAlign: 'center',
  },
  socialBtnn: {
    width: 50,
    height: 50,
    marginLeft: 120,
    marginTop: 20
  },
  socialBtn: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 20
  },
  imgBottom: {
    width: 275,
    maxHeight: 150,
    alignSelf: 'center',
  },
});

export default Landing;
