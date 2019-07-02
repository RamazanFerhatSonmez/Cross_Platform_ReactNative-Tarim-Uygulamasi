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
        } from '../actions/types';
        const INITIAL_STATE = {
            kullaniciId: '',
            mail: '',
            sezonId: '',
            email: '',
            password: '',
            sezon: [],
            tarlaList:[],
            urunList:[],
            sezonName: '',
            loading: false
        };
        
        export default (state = INITIAL_STATE, action) => {
        
            switch (action.type) {
                case BIRIM_HASAT_CHANGED:
                    return { ...state, email: action.payload };
                case BIRIM_HASAT_MIKTAR_CHANGED:
                    return { ...state, password: action.payload };
                case ISLEM_ADI_CHANGED:
                    console.log("ACTION::" + action);
                    return { ...state, loading: true };
                case ISLEM_MASRAFI_CHANGED:
                    return { ...state, mail: action.payload.KullaniciMail, kullaniciId: action.payload._id,sezon: action.payload.sezonTanimlama, loading: false};
                case MASRAF_ACIKLAMA_CHANGED:
                    return { ...state, loading: false, email: '', password: '' };
                case MASRAF_MIKTAR_CHANGED:
                     return { ...state,sezonName: action.payload.sezonName}
                case MASRAF_CHANGED:
                     return  {...state};
                case URUN_MASRAF_SAVE:
                    return { ...state};
                case URUN_ISLEM_SAVE:
                    return {...state};
                case URUN_HASAT_SAVE:
                    return { ...state}
                default:
                    return state;
        
            }
        };