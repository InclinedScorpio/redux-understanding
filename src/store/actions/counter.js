import * as actionTypes from "./actionTypes";

export const increment = () => {
	return {
		type: actionTypes.INC_COUNTER
	};
};

export const addition = value => {
	return (dispatch, getState) => {
		console.log("#######", getState().ctr.counter);
		setTimeout(() => {
			dispatch({
				type: actionTypes.ADD_COUNTER,
				payload: {
					value: value
				}
			});
		}, 2000);
	};
};

export const decrement = () => {
	return {
		type: actionTypes.DEC_COUNTER
	};
};

export const subtraction = value => {
	return {
		type: actionTypes.SUB_COUNTER,
		payload: {
			value: value
		}
	};
};
