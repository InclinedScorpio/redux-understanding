export const INC_COUNTER = "INC_COUNTER";
export const ADD_COUNTER = "ADD_COUNTER";
export const DEC_COUNTER = "DEC_COUNTER";
export const SUB_COUNTER = "SUB_COUNTER";
export const SAVE_COUNTER = "SAVE_COUNTER";
export const DELETE_ELEMENT = "DELETE_ELEMENT";

export const increment = () => {
	return {
		type: INC_COUNTER
	};
};

export const addition = value => {
	return {
		type: ADD_COUNTER,
		payload: {
			value: value
		}
	};
};

export const decrement = () => {
	return {
		type: DEC_COUNTER
	};
};

export const subtraction = value => {
	return {
		type: SUB_COUNTER,
		payload: {
			value: value
		}
	};
};

export const saveCounter = counter_value => {
	return {
		type: SAVE_COUNTER,
		payload: {
			value: counter_value
		}
	};
};

export const deleteElement = id => {
	return {
		type: DELETE_ELEMENT,
		payload: {
			value: id
		}
	};
};
