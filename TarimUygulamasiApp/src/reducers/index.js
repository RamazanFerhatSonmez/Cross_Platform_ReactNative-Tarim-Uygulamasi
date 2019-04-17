import { combineReducers } from 'redux';
import KimlikDogrulamaReducers from './KimlikdogrulamaReducers';
export default combineReducers ({
    kimlikdogrulamaResponse: KimlikDogrulamaReducers,
});
