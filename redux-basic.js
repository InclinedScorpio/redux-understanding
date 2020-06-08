const redux = require("redux");

const initialState = {
	counter: 0
};

//make store
const createStore = redux.createStore;

//make Reducer
const rootReducer = (state = initialState, action) => {
	if (action.type == "INC_COUNTER") {
		return {
			...state,
			counter: state.counter + 1
		};
	}
	if (action.type == "ADD_COUNTER") {
		return {
			...state,
			counter: state.counter + action.payload
		};
	}

	return state;
};

const store = createStore(rootReducer);

//ADDING SUBSCRIPTION TO REDUX - TO INFORM ALL STATE CHANGE
//SUBSCRIBE MUST COME BEFORE ACTIONS
store.subscribe(() => {
	//FUNCTION WILL BE CALLED WHEN STATE IS CHANGED @@@@
	console.log("[REDUX UPDATED]===////=== ", store.getState());
});

console.log(store.getState()); //output {counter: 0}

//DISPATCHING ACTIONS
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", payload: 20 });
console.log(store.getState()); //output  {counter: 21}
