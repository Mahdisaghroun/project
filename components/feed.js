
import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';

const Feed = ({ navigation }) => {
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
              {/* view icon */}
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View>
                  <TouchableOpacity style={{ marginLeft: 25 }} onPress={() => navigation.navigate('Qui somme nous')}>
                    <Image source={require("@images/home/qui_sommes_nous.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: 'white', marginRight: 20 }}>Qui Sommes-Nous</Text>
                </View>

                <View style={{ marginLeft: 10 }}>
                  <TouchableOpacity style={{ marginLeft: 3 }} onPress={() => navigation.navigate('En cours de construction')}>
                    <Image source={require("@images/home/autour_de_moi.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: 'white', marginLeft: 1 }}>Autour de moi</Text>
                </View>
                <View style={{ marginLeft: 40 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('En cours de construction')}>
                    <Image source={require("@images/home/event.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: 'white' }}>Evenements</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View>
                  <TouchableOpacity style={{ marginLeft: 25 }} onPress={() => navigation.navigate('Mon espace')}>
                    <Image source={require("@images/home/mon_espace.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity >
                  <Text style={{ color: 'white', marginRight: 72 }}>Mon espace</Text>
                </View>

                <View style={{ marginLeft: 10 }} onPress={() => navigation.navigate('En cours de construction')}>
                  <TouchableOpacity style={{ marginLeft: 3 }} onPress={() => navigation.navigate('En cours de construction')}>
                    <Image source={require("@images/home/espace_pro.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: 'white', marginLeft: 1 }}>ESPACE 2B2</Text>
                </View>
                <View style={{ marginLeft: 40 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('En cours de construction')}>
                    <Image source={require("@images/home/fil_d_actualites.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: 'white' }}>ACTUALITé</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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
  icon: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 70,
    width: 70,
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
    marginTop: 20,
  },
  socialBtn: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 20,
  },
  imgBottom: {
    width: 275,
    maxHeight: 150,
    alignSelf: 'center',
  },
});

export default Feed;
