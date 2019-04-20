import { combineReducers } from 'redux';
import KimlikDogrulamaReducers from './KimlikdogrulamaReducers';
import uyeOlReducers from './uyeOlReducers';
export default combineReducers ({
    kimlikdogrulamaResponse: KimlikDogrulamaReducers,
    uyeOlResponse: uyeOlReducers,
});
