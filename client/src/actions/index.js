import axios from 'axios';
import { FETCH_USER, FETCH_CARDS } from './types';

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token, cards) => async (dispatch) => {
	const res = await axios.post('/api/stripe', token);
	console.log(res);
	if (res.data.error) {
		dispatch({ type: FETCH_USER, payload: res.data });
	} else {
		let newCards = cards;
		newCards.push(res.data);

		console.log(newCards);
		dispatch({ type: FETCH_CARDS, payload: newCards });
	}
};
