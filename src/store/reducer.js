const initialState = {
	counter: 0,
	result: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "INC_COUNTER":
			return {
				...state,
				counter: state.counter + 1
			};
		case "ADD_COUNTER":
			return {
				...state,
				counter: state.counter + 10
			};
		case "DEC_COUNTER":
			return {
				...state,
				counter: state.counter - 1
			};
		case "SUB_COUNTER":
			return {
				...state,
				counter: state.counter - 10
			};
		case "SAVE_COUNTER":
			return {
				...state,
				result: state.result.concat({ id: new Date(), value: state.counter })
			};
		default:
			return state;
	}
};

export default reducer;
