import {
     TARLA_AD_CHANGED,
    TARLA_DEKAR_CHANGED,
    TARLA_DATE_CHANGED,
    TARLA_POST_SUCCESS,
    TARLA_SUCCESS_FAIL_ADD,
    TARLA_ADD_CLICK,
    URUN_ADD_CLICK,
    URUN_AD_CHANGED,
    URUN_MIKTAR_CHANGED,
    URUN_POST_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    tarlaAd:'',
    tarlaDekarBilgisi: '',
    tarlaOlusTarih: '',
    kullaniciId: '',
    sezonId: '',
    urunAd: '',
    urunMiktar: '',
    tarlaId: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TARLA_AD_CHANGED:
            return { ...state, tarlaAd: action.payload };
        case TARLA_DEKAR_CHANGED:
            return { ...state, tarlaDekarBilgisi: action.payload };
        case TARLA_DATE_CHANGED:
            return { ...state, tarlaOlusTarih: action.payload };
        case TARLA_POST_SUCCESS:
            return { ...state, loading: false };
        case TARLA_SUCCESS_FAIL_ADD:
            return {
                ...state,
                loading: false,
                tarlaAd: '',
                tarlaDekarBilgisi: ''
            };
        case TARLA_ADD_CLICK:
            return {...state,kullaniciId:action.payload.kullaniciId,sozonId:action.payload.sezonId,}
        case URUN_ADD_CLICK:
            return { ...state,tarlaId:action.payload.tarlaId}
        case URUN_AD_CHANGED:
            return { ...state, urunAd: action.payload };
        case URUN_MIKTAR_CHANGED:
            return { ...state, urunMiktar: action.payload };
        case URUN_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                urunAd: '',
                urunMiktar: ''
            };
        default:
            return state;
    }
};