import axios from 'axios';
import {
            BIRIM_HASAT_CHANGED,
            BIRIM_HASAT_MIKTAR_CHANGED,
            ISLEM_ADI_CHANGED,
            ISLEM_MASRAFI_CHANGED,
            MASRAF_ACIKLAMA_CHANGED,
            MASRAF_MIKTAR_CHANGED,
            MASRAF_CHANGED,
            URUN_MASRAF_SAVE,
            URUN_ISLEM_SAVE,
            URUN_HASAT_SAVE,
} from './types';

export const birimHasatChanged = (birimHasat) => {
            debugger
            //   
            const birim_Hasat = { birimHasat };
            return dispatch => {
                        dispatch({
                                    type: BIRIM_HASAT_CHANGED,
                                    payload: birim_Hasat
                        });
            };
}
export const birimHasatMiktarChanged = (birimHasatMiktar) => {
            debugger
            const birim_HasatMiktar = { birimHasatMiktar };
            return dispatch => {
                        dispatch({
                                    type: BIRIM_HASAT_MIKTAR_CHANGED,
                                    payload: birim_HasatMiktar
                        });
            };
}
export const hasatPut = (hasatData) => {
            return (dispatch) => {
                        dispatch({ type: URUN_HASAT_SAVE });
                        if (mail === '' || sezonName === '') {
                                    loginFailBos(dispatch);
                        } else {
                                    //urunSchemaHasat/:tarlaid/:urunSchmaId/:birim/:hasatmiktar
                                    let param = hasatData.tarlaid + "/" + hasatData.urunSchmaId + "/" + hasatData.birim + "/" + hasatData.hasatMiktar
                                    axios.put('http://192.168.1.2:3030/urunSchemaHasat/' + param)
                                                .then(function (response) {
                                                            debugger
                                                            if (response.status === 200) {
                                                                        getSezon(dispatch, mail)
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
export const IslemAdiChanged = (IslemAdi) => {
            debugger
            const Islem_Adi = { IslemAdi };
            return dispatch => {
                        dispatch({
                                    type: ISLEM_ADI_CHANGED,
                                    payload: Islem_Adi
                        });
            };    
}
export const IslemMasrafiChanged = (IslemMasrafi) => {
            debugger
            const Islem_Masrafi = { IslemMasrafi };
            return dispatch => {
                        dispatch({
                                    type: ISLEM_MASRAFI_CHANGED,
                                    payload: Islem_Masrafi
                        });
            };     
}
export const islemPut = (islemData) => {
            return (dispatch) => {
                        dispatch({ type: URUN_ISLEM_SAVE });
                        if (mail === '' || sezonName === '') {
                                    loginFailBos(dispatch);
                        } else {
                                    //urunSchemaTur/:tarlaid/:urunSchmaId/:name/:masraf
                                    let param = islemData.tarlaid + "/" + islemData.urunSchmaId + "/" + islemData.islemName + "/" + islemData.masraf
                                    axios.put('http://192.168.1.2:3030/urunSchemaTur/' + param)
                                                .then(function (response) {
                                                            debugger
                                                            if (response.status === 200) {
                                                                        getSezon(dispatch, mail)
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
export const aciklamaChanged = (aciklama) => {
            debugger
            const masraf_Aciklama = { aciklama };
            return dispatch => {
                        dispatch({
                                    type: MASRAF_ACIKLAMA_CHANGED,
                                    payload: masraf_Aciklama
                        });
            };     
}
export const miktarChanged = (miktar) => {
            const masraf_Miktar = { miktar };
            return dispatch => {
                        dispatch({
                                    type: MASRAF_MIKTAR_CHANGED,
                                    payload: masraf_Miktar
                        });
            }; 
}
export const _IslemMasrafiChanged = (masraf) => {
            const _masraf = { masraf };
            return dispatch => {
                        dispatch({
                                    type: MASRAF_CHANGED,
                                    payload: _masraf
                        });
            };   
}
export const masrafPut = (masrafData) => {
            return (dispatch) => {
                        dispatch({ type: URUN_MASRAF_SAVE });
                        if (mail === '' || sezonName === '') {
                                    loginFailBos(dispatch);
                        } else {
                                    ///urunSchemaMasraf/:tarlaid/:urunSchmaId/:desc/:miktar/:masraf
                                    let param = masrafData.tarlaid + "/" + masrafData.urunSchmaId + "/" + masrafData.aciklama + "/" + masrafData.miktar + "/" + masraf; 
                                    axios.put('http://192.168.1.2:3030/urunSchemaMasraf/' + param)
                                                .then(function (response) {
                                                            debugger
                                                            if (response.status === 200) {
                                                                        getSezon(dispatch, mail)
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