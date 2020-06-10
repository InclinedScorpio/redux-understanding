import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import counterReducers from "./store/reducers/counter";
import resultReducers from "./store/reducers/result";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootReducers = combineReducers({
	ctr: counterReducers,
	res: resultReducers
});

const statePrintingMiddleware = store => {
	return next => {
		return action => {
			console.log("[MIDDLEWARE]:action", action);
			const result = next(action);
			console.log("[MIDDLEWARE]:state", store.getState());
			return result;
		};
	};
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducers,
	composeEnhancers(applyMiddleware(statePrintingMiddleware, thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
