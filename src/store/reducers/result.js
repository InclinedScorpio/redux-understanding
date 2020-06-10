import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utilities";

const initialState = {
	result: []
};

const filterArray = (state, action) => {
	return updateObject(state, {
		result: state.result.filter(res => {
			return res.id !== action.payload.value;
		})
	});
};

const concatToArray = (state, action) => {
	return updateObject(state, {
		result: state.result.concat({
			id: new Date(),
			value: action.payload.value
		})
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SAVE_COUNTER:
			return concatToArray(state, action);

		case actionTypes.DELETE_ELEMENT:
			return filterArray(state, action);

		default:
			return state;
	}
};

export default reducer;
