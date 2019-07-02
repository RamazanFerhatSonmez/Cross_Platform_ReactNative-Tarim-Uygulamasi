import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
    TARLA_AD_CHANGED,
    TARLA_DEKAR_CHANGED,
    TARLA_DATE_CHANGED,
    TARLA_POST_SUCCESS,
    TARLA_SUCCESS_FAIL_ADD,
    TARLA_ADD_CLICK,
    URUN_AD_CHANGED,
    URUN_MIKTAR_CHANGED,
    URUN_ADD_CLICK,
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
export const tarlaAddClickTarlaList = ({ kullaniciId, sezonId }) => {
    const tarlaArray = {
        kullaniciId: kullaniciId,
        sezonId: sezonId,
    };
    return (dispatch) => {
        dispatch({
            type: TARLA_ADD_CLICK,
            payload: tarlaArray
        });
    };
};
export const tarlaAddPost = ({ kullaniciId, sezonId, tarlaAd, tarlaDekarBilgisi }) => {
    return (dispatch) => {
        dispatch({ type: TARLA_POST_SUCCESS });
        if (tarlaAd === '' || tarlaDekarBilgisi === '' || tarlaAd === undefined || tarlaDekarBilgisi === undefined) {
            loginFailBos(dispatch);
        }
        else {
            const _post = kullaniciId + "/" + sezonId + "/" + tarlaAd + "/" + tarlaDekarBilgisi
            axios.put('http://192.168.1.2:3030/shemaTarlaInsert/' + _post)
                .then(function (response) {
                    if ((response.status === 200)) {
                        loginSucces(dispatch)
                    } else {
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
export const urunAdChanged = (urunAd) => {
    return (dispatch) => {
        dispatch({
            type: URUN_AD_CHANGED,
            payload: urunAd
        });
    };
}
export const urunMiktarChanged = (urunMiktar) => {
    return (dispatch) => {
        dispatch({
            type: URUN_MIKTAR_CHANGED,
            payload: urunMiktar
        });
    };
}
export const urunAddClickTarlaList = ({ tarlaId }) => {
    const urun = {
        tarlaId: tarlaId
    }
    return (dispatch) => {
        dispatch({
            type: URUN_ADD_CLICK,
            payload: urun
        });
    };
};
export const urunAddPost = ({ tarlaId, urunAd, urunMiktar }) => {
    return (dispatch) => {
        dispatch({ type: URUN_POST_SUCCESS });
        if (urunAd === '' || urunMiktar === '' || tarlaId === '') {
            loginFailBos(dispatch);
        }
        else {
            const _post = tarlaId + "/" + urunAd + "/" + urunMiktar
            axios.put('http://192.168.1.2:3030/urunSchemaInsert/' + _post)
                .then(function (response) {
                    if ((response.status === 200)) {
                        loginSuccesUrunAdd(dispatch)
                    } else {
                        loginFail(dispatch)
                    }
                })
                .catch(function (error) {
                    loginFail(dispatch)
                });
        }
    };
}
const loginSuccesUrunAdd = (dispatch) => {
    Alert.alert(
        'Mesaj',
        ' Urun Ekleme Başarılı',
        [
            { text: 'Tamam', onPress: () => null }
        ]
    );
    Actions.TarlaView();
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


