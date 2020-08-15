import { SHOW_ALERT } from '../actions/types';

export default (state = { show: false, error: '' }, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return action.payload;
		default:
			return state;
	}
};
