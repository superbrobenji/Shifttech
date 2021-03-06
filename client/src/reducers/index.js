import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cardsReducer from './cardsReducer';
import showAlertReducer from './showAlertReducer';
import countriesReducer from './countriesReducer';

export default combineReducers({
	auth: authReducer,
	cards: cardsReducer,
	showAlert: showAlertReducer,
	countries: countriesReducer,
});
