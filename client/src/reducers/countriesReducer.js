import { FETCH_COUNTRIES } from '../actions/types';

export default (
	state = { allCountries: [], blacklistedCountries: [] },
	action,
) => {
	switch (action.type) {
		case FETCH_COUNTRIES:
			return { ...state, allCountries: action.payload };
		default:
			return state;
	}
};
