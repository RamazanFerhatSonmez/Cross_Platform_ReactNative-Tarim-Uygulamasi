import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL, TARLA_LIST, LOGIN_USER_FAIL_UYE,
    GET_TARLA_URUN_LIST,
    SEZON_NAME_CHANGED,
    SEZON_NAME_SAVE,
    GET_TARLA_URUN_CONTENT
} from './types';
//import TarlaView from "../components/TarlaView";
export const emailChanged = (email) => {
  return dispatch => {
    dispatch({
      type: EMAIL_CHANGED,
      payload: email
    });
  };
};
export const sezonNameChanged = (sezonName) => {
    debugger
    const sezon_Name = {sezonName} ;
    return dispatch => {
        dispatch({
            type: SEZON_NAME_CHANGED,
            payload: sezon_Name
        });
    };
}
export const sezonNamePut = (mail, sezonName) => {
    return (dispatch) => {
        dispatch({ type: SEZON_NAME_SAVE });
        if (mail === '' || sezonName === '') {
            loginFailBos(dispatch);
        } else {
            axios.put('http://192.168.1.2:3033/shemaSezonInsert/'+ mail + "/" + sezonName)
                .then(function (response) {
                    debugger
                    if(response.status === 200){
                        getSezon(dispatch,mail)
                    }else{
                        loginFail(dispatch)
                    }
                })
                .catch(function (error) {
                    loginFail(dispatch)
                });
        }
    };
}
export const passwordChanged = (password) => {
  return (dispatch) => {
    dispatch({
      type: PASSWORD_CHANGED,
      payload: password
    });
  };
};
export const getUrun = (id) => {
  return (dispatch) => { axios.get('http://192.168.1.2:3033/getUrunShema/'+ id)
        .then(function (response) {
            if((response.status === 200)) getTarlaUrun(dispatch,response.data[0].urunSheama,id);
        })
        .catch(function (error) {
            loginFail(dispatch)
        });}
};
export const getUrunContent = (urunContent) => {
    return (dispatch) => {
        const urunArray = {
            urunList:urunContent,
        }
        dispatch({
            type: GET_TARLA_URUN_CONTENT,
            payload: urunArray
        });
    }
}
export const getTarlaUrun = (dispatch,tarlaUrunList,id) => {
    const urunArray = {
        urunList:tarlaUrunList,
        tarlaId: id,
    }
    dispatch({
        type: GET_TARLA_URUN_LIST,
        payload: urunArray
    });
    Actions.TarlaView();
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
  const tarlaArray = {
        tarlaList: talaList,
        sezonId:sezonId}
  return (dispatch) => {dispatch({
    type: TARLA_LIST,
    payload: tarlaArray
  });
  }
};
const getSezon = (dispatch,mail) => {
    if (mail === '') {
        loginFailBos(dispatch);
    } else {
        axios.get('http://192.168.1.2:3033/userLogin/'+ mail)
            .then(function (response) {
                debugger
                if(response.status === 200){
                    loginSucces(dispatch,response.data);
                }else{
                    loginFail(dispatch)
                }
            })
            .catch(function (error) {
                loginFail(dispatch)
            });
    }
};

