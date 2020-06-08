import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

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
		incrementCounter: () => dispatch({ type: actionTypes.INC_COUNTER }),
		decrementCounter: () => dispatch({ type: actionTypes.DEC_COUNTER }),
		addCounter: () => dispatch({ type: actionTypes.ADD_COUNTER }),
		subCounter: () => dispatch({ type: actionTypes.SUB_COUNTER }),
		handleClick: ctrValue =>
			dispatch({
				type: actionTypes.SAVE_COUNTER,
				payload: { counterValue: ctrValue }
			}),
		deleteElement: id =>
			dispatch({ type: actionTypes.DELETE_ELEMENT, payload: { elementId: id } })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
