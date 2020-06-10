import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
	render() {
		console.log("PROPS:::", this.props);
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
				<button onClick={() => this.props.handleClick(this.props.ctr)}>
					Save Result
				</button>

				<div>
					<ul>
						{this.props.result.map(res => (
							<li key={res.id} onClick={() => this.props.deleteElement(res.id)}>
								{res.value}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter,
		result: state.res.result
	};
};

const mapDispatchToProps = dispatch => {
	return {
		incrementCounter: () => dispatch(actionCreators.increment()),
		decrementCounter: () => dispatch(actionCreators.decrement()),
		addCounter: () => dispatch(actionCreators.addition(10)),
		subCounter: () => dispatch(actionCreators.subtraction(10)),
		handleClick: ctrValue => dispatch(actionCreators.saveCounter(ctrValue)),
		deleteElement: id => dispatch(actionCreators.deleteElement(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
