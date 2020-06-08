import * as actionTypes from "../actions";

const initialState = {
	result: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SAVE_COUNTER:
			return {
				...state,
				result: state.result.concat({
					id: new Date(),
					value: action.payload.counterValue
				})
			};
		case actionTypes.DELETE_ELEMENT:
			return {
				...state,
				result: state.result.filter(res => {
					return res.id !== action.payload.elementId;
				})
			};
		default:
			return state;
	}
};

export default reducer;
