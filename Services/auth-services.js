import axios from 'axios'
import { baseURL } from '../API_CONFIG';
import { decode as atob, encode as btoa } from 'base-64';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signin = async (email, password) => {

      let auth = btoa(email + ':' + password);

      const requestOptions = {
            method: 'post',
            url: baseURL + '/auth/login',
            headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Basic ' + auth,

            },


      };


      return axios(requestOptions)


};
export const register_as_pratiquant = (
      nom,
      phone,
      Email,
      password) => {
      var data = JSON.stringify({
            fullname: nom,
            email: Email,
            password: password,
            phone: phone,
            type: 'PRATIQUANT',
            passwordHash: password,
      })
      const requestOptions = {
            method: 'post',
            url: baseURL + '/auth/register',
            headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
            },
            data: data

      };

      return axios(requestOptions)

};
export const logout = () => {

}
export const editInfos = async (user) => {
      let token
      try {

            token = await AsyncStorage.getItem('token')
            consolle.log(token)

            var data = JSON.stringify(data);

            var config = {
                  method: 'put',
                  url: 'https://sport-to-go-api.herokuapp.com/users/profile',
                  headers: {
                        'Authorization': "Bearer" + " " + token,
                        'Content-Type': 'application/json'
                  },
                  data: data
            };

            return axios(config)

      } catch (e) {
            // saving error
      }
}
export const changePassword = async (pass) => {
      let token
      try {

            token = await AsyncStorage.getItem('token')
            consolle.log(token)
            var data = JSON.stringify({ "password": pass });

            var config = {
                  method: 'put',
                  url: 'https://sport-to-go-api.herokuapp.com/users/profile',
                  headers: {
                        'Authorization': "Bearer" + " " + token,
                        'Content-Type': 'application/json'
                  },
                  data: data
            };

            return axios(config)

      } catch (e) {
            // saving error
      }
}
