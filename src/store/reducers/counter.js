import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utilities";

const initialState = {
	counter: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INC_COUNTER:
			return updateObject(state, { counter: state.counter + 1 });

		case actionTypes.ADD_COUNTER:
			return updateObject(state, {
				counter: state.counter + action.payload.value
			});

		case actionTypes.DEC_COUNTER:
			return updateObject(state, { counter: state.counter - 1 });

		case actionTypes.SUB_COUNTER:
			return updateObject(state, {
				counter: state.counter - action.payload.value
			});

		default:
			return state;
	}
};

export default reducer;
