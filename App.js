/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/landin';
import Login from './components/login';
import Pratiquant from './components/pratiquant';
import professionel from './components/professionel';
import Professionel2 from './components/professionel2';
import Partenariat from './components/partenariat';
import Feed from './components/feed';
import { primaryColor } from './Constants/Colors';
import CongratsView from './components/CongratsView';
import DashRoute from './components/DashRoute';
import About from './components/Qui_Somme_Nous';
import Splash from './Splash';
import MonEspace from './components/Mon espace/MonEspace';
import EditInfos from './components/Mon espace/EditInfos';
import Chat from './components/Chat';
import EditPass from './components/Mon espace/EditPass';


const Stack = createStackNavigator();

function App() {
  const [User, setUser] = React.useState()
  React.useEffect(async () => {
    try {

      const user = await AsyncStorage.getItem('User')
      setUser(user)
    } catch (e) {
      // saving error
    }
  }, [])
  return (
    <>

      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          < Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Créer un compte Profossionnel" component={professionel} />
          <Stack.Screen name="Créer un compte Pratiquant" component={Pratiquant} />
          <Stack.Screen name="Professionel2" component={Professionel2} />
          <Stack.Screen name="Partenariat" component={Partenariat} />
          <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
          <Stack.Screen name="Félécitations" component={CongratsView} options={{ headerShown: false }} />

          <Stack.Screen name="DashRoute" component={DashRoute} options={{ headerShown: false }} />
          <Stack.Screen name="Qui somme nous" component={About} />
          <Stack.Screen name="Mon espace" component={MonEspace} options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: primaryColor
            }

          }} />
          <Stack.Screen name="EditInfos" component={EditInfos} options={{ headerShown: false }} />
          <Stack.Screen name="EditPass" component={EditPass} options={{ headerShown: false }} />
          <Stack.Screen name="En cours de construction" component={Chat} />


        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
