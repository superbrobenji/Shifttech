import axios from 'axios';
import { FETCH_USER, FETCH_CARDS, SHOW_ALERT, FETCH_COUNTRIES } from './types';

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token, cards) => async (dispatch) => {
	const res = await axios.post('/api/stripe', token);
	if (res.data.error) {
		console.log(res.data.error);
		dispatch({
			type: SHOW_ALERT,
			payload: { show: true, error: res.data.error },
		});
		dispatch({
			type: SHOW_ALERT,
			payload: { show: false, error: res.data.error },
		});
	} else {
		let newCards = cards;
		newCards.push(res.data);

		dispatch({ type: FETCH_CARDS, payload: newCards });
	}
};

export const fetchCards = () => async (dispatch) => {
	const res = await axios.get('/api/cards');
	dispatch({ type: FETCH_CARDS, payload: res.data });
};

export const fetchCountries = () => async (dispatch) => {
	const res = await axios.get('/api/countries');
	dispatch({ type: FETCH_COUNTRIES, payload: res.data });
};
