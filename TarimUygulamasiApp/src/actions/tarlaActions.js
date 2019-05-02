import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
    TARLA_AD_CHANGED,
    TARLA_DEKAR_CHANGED,
    TARLA_DATE_CHANGED,
    TARLA_POST_SUCCESS,
    TARLA_SUCCESS_FAIL_ADD,
    TARLA_ADD_CLICK
} from './types';

export const tarlaAdChanged = (tarlaAd) => {
    return (dispatch) => {
        dispatch({
            type: TARLA_AD_CHANGED,
            payload: tarlaAd
        });
    };
}
export const tarlaDekarChanged = (tarlaDekarBilgisi) => {
    return (dispatch) => {
        dispatch({
            type: TARLA_DEKAR_CHANGED,
            payload: tarlaDekarBilgisi
        });
    };
}
export const tarlaDateChanged = (tarlaOlusTarih) => {
    return (dispatch) => {
        dispatch({
            type: TARLA_DATE_CHANGED,
            payload: tarlaOlusTarih
        });
    };
}
export const tarlaAddPost = ({kullaniciId,sezonId,tarlaAd, tarlaDekarBilgisi}) => {
    debugger
    return (dispatch) => {
        dispatch({ type: TARLA_POST_SUCCESS });
        if (tarlaAd === '' || tarlaDekarBilgisi === '') {
            loginFailBos(dispatch);
        }
        else {
            const _post = kullaniciId + "/" + sezonId + "/" + tarlaAd + "/" + tarlaDekarBilgisi
            debugger
            axios.put('http://192.168.1.2:3033/shemaTarlaInsert/'+ _post)
                .then(function (response) {
                    debugger
                    if((response.status === 200)){
                        loginSucces(dispatch)
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
const loginSucces = (dispatch) => {
    Alert.alert(
        'Mesaj',
        ' Tarla Ekleme Başarılı',
        [
            { text: 'Tamam', onPress: () => null }
        ]
    );
    Actions.tarlaPage();
};


const loginFailBos = (dispatch) => {
    Alert.alert(
        'Mesaj',
        'Tarla Ekleme Başarısız !',
        [
            { text: 'Tamam', onPress: () => null }
        ]
    );
    dispatch({
        type: TARLA_SUCCESS_FAIL_ADD
    });
};

export const tarlaAddClickTarlaList = ({kullaniciId,sezonId}) => {
    const tarlaArray  = {
        kullaniciId:kullaniciId,
        sezonId: sezonId,
    };
    return (dispatch) => {
        dispatch({
            type: TARLA_ADD_CLICK,
            payload: tarlaArray
        });
    };
};