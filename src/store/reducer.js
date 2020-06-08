const initialState = {
	counter: 0
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
		default:
			return state;
	}
};

export default reducer;
