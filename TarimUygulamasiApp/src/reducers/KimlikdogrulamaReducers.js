import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL, TARLA_LIST,
    GET_TARLA_URUN_LIST
} from '../actions/types';

const INITIAL_STATE = {
    kullaniciId: '',
    sezonId: '',
    email: '',
    password: '',
    sezon: [],
    tarlaList:[],
    urunList:[],
    loading: false
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            console.log("ACTION::" + action);
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state,kullaniciId: action.payload._id,sezon: action.payload.sezonTanimlama, loading: false};
        case LOGIN_USER_FAIL:
            return { ...state, loading: false, email: '', password: '' };
        case TARLA_LIST:
            return { ...state,sezonId: action.payload.sezonId,tarlaList: action.payload.tarlaList };
        case GET_TARLA_URUN_LIST:
            return {...state,tarlaId:action.payload.tarlaId,urunList: action.payload.urunList};
        default:
            return state;

    }
};
