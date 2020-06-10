import * as actionTypes from "./actionTypes";

export const saveCounter = counter_value => {
	return {
		type: actionTypes.SAVE_COUNTER,
		payload: {
			value: counter_value
		}
	};
};

export const deleteElement = id => {
	return {
		type: actionTypes.DELETE_ELEMENT,
		payload: {
			value: id
		}
	};
};
