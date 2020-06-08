import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
	state = {
		counter: 0
	};

	counterChangedHandler = (action, value) => {
		switch (action) {
			case "inc":
				this.setState(prevState => {
					return { counter: prevState.counter + 1 };
				});
				break;
			case "dec":
				this.setState(prevState => {
					return { counter: prevState.counter - 1 };
				});
				break;
			case "add":
				this.setState(prevState => {
					return { counter: prevState.counter + value };
				});
				break;
			case "sub":
				this.setState(prevState => {
					return { counter: prevState.counter - value };
				});
				break;
		}
	};

	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl
					label="Increment"
					clicked={this.props.incrementCounter}
				/>
				<CounterControl
					label="Decrement"
					clicked={this.props.decrementCounter}
				/>
				<CounterControl label="Add 5" clicked={this.props.addCounter} />
				<CounterControl label="Dec 5" clicked={this.props.subCounter} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.counter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		incrementCounter: () => dispatch({ type: "INC_COUNTER" }),
		decrementCounter: () => dispatch({ type: "DEC_COUNTER" }),
		addCounter: () => dispatch({ type: "ADD_COUNTER" }),
		subCounter: () => dispatch({ type: "SUB_COUNTER" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
