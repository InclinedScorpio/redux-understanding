import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utilities";

const initialState = {
	result: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SAVE_COUNTER:
			return updateObject(state, {
				result: state.result.concat({
					id: new Date(),
					value: action.payload.value
				})
			});
		case actionTypes.DELETE_ELEMENT:
			return updateObject(state, {
				result: state.result.filter(res => {
					return res.id !== action.payload.value;
				})
			});
		default:
			return state;
	}
};

export default reducer;
