import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

export default function Splash({ navigation }) {
      const fetching = async () => {
            try {

                  const user = await AsyncStorage.getItem('User')
                  if (user) {
                        navigation.navigate('DashRoute')
                  }
                  else navigation.navigate('Landing')
            } catch (e) {
                  // saving error
            }
      }
      fetching()
      return (
            <View>
            </View>

      )

}
