import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AD_CHANGED_UYE,
    SOYAD_CHANGED_UYE,
    EMAIL_CHANGED_UYE,
    PASSWORD_CHANGED_UYE,
    LOGIN_USER_UYE,
    LOGIN_USER_SUCCESS_UYE,
    LOGIN_USER_FAIL_UYE } from './types';
import axios from "axios";

export const adChangeduye = (ad) => {
    return (dispatch) => {
        dispatch({
            type: AD_CHANGED_UYE,
            payload: ad
        });
    };
};

export const soyadChangeduye = (soyad) => {
    return (dispatch) => {
        dispatch({
            type: SOYAD_CHANGED_UYE,
            payload: soyad
        });
    };
};

export const emailChangeduye = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL_CHANGED_UYE,
            payload: email
        });
    };
};

export const passwordChangeduye = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED_UYE,
            payload: password
        });
    };
};

export const loginUseruye = ({ ad, soyad, email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_UYE });
        if (ad === '' || soyad === '' || email === '' || password === '') {
            loginFailBos(dispatch);
        }
        else {
            const _post = ad + "/" + soyad + "/" + email + "/" + password + "/" + password
            axios.post('http://192.168.1.2:3033/SignIn/'+ _post)
                .then(function (response) {
                    if((response.status === 200)){
                        loginSucces(dispatch, email)
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

const loginFailuye = (dispatch) => {
    Alert.alert(
        'Mesaj',
        'Hata Oluştu',
        [
            { text: 'Tamam', onPress: () => null }
        ]
    );
    dispatch({
        type: LOGIN_USER_FAIL_UYE
    });
};

const loginSucces = (dispatch, user) => {
    Alert.alert(
        'Mesaj',
        'Kullanıcı Başarılı Bir Şekilde Oluştu. Login Sayfasına Yönlendiriliyorsunuz...',
        [
            { text: 'Tamam', onPress: () => null }
        ]
    );
    axios.post('http://192.168.1.2:3033/SignIn/'+ _post)
    Actions.girisYap();
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
        type: LOGIN_USER_FAIL_UYE
    });
};
