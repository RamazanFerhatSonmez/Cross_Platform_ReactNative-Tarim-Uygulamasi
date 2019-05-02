import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL, TARLA_LIST, LOGIN_USER_FAIL_UYE
} from './types';

export const emailChanged = (email) => {
  return dispatch => {
    dispatch({
      type: EMAIL_CHANGED,
      payload: email
    });
  };
};

export const passwordChanged = (password) => {
  return (dispatch) => {
    dispatch({
      type: PASSWORD_CHANGED,
      payload: password
    });
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    if (email === '' || password === '') {
       loginFailBos(dispatch);
    } else {
      axios.get('http://192.168.1.2:3033/userLogin/'+ email)
          .then(function (response) {
            if(response.data.KullaniciSifre === password){
                loginSucces(dispatch, response.data)
            }else{
              loginFail(dispatch)
            }
          })
          .catch(function (error) {
            loginFail(dispatch)
          });
    }
  };
};

const loginFail = (dispatch) => {
  Alert.alert(
    'Mesaj',
    'Şifre Hatalı',
    [
      { text: 'Tamam', onPress: () => null }
    ]
  );
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

export const loginSucces = (dispatch, user) => {
  debugger
    dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  console.log("USER:: " + user);
  Actions.sezonPage();
};

const loginFailBos = (dispatch) => {
  Alert.alert(
    'Mesaj',
  'Her iki alanda Dolu olmalı!',
    [
      { text: 'Tamam', onPress: () => null }
    ]
  );
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

export const tarlaListClick = (talaList,sezonId) => {
    debugger
  const tarlaArray = {
        tarlaList: talaList,
        sezonId:sezonId}
  return (dispatch) => {dispatch({
    type: TARLA_LIST,
    payload: tarlaArray
  });
  }
};

