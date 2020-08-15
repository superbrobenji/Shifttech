import { FETCH_COUNTRIES, ADD_BLACKLIST_COUNTRIES } from '../actions/types';

export default (
	state = { allCountries: [], blacklistedCountries: [] },
	action,
) => {
	switch (action.type) {
		case FETCH_COUNTRIES:
			return { ...state, allCountries: action.payload };
		case ADD_BLACKLIST_COUNTRIES:
			return { ...state, blacklistedCountries: action.payload };
		default:
			return state;
	}
};
