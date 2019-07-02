import { combineReducers } from 'redux';
import KimlikDogrulamaReducers from './KimlikdogrulamaReducers';
import uyeOlReducers from './uyeOlReducers';
import tarlaAddReducers from "./tarlaAddReducers";
import urunReducers from "./urunReducers";
export default combineReducers ({
    kimlikdogrulamaResponse: KimlikDogrulamaReducers,
    uyeOlResponse: uyeOlReducers,
    tarlaAddResponse: tarlaAddReducers,
    urunResponse: urunReducers,
});
