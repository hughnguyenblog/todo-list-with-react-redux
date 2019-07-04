import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

export class Input extends Component {
	render() {
		return (
			<div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						this.props.submit(this.getInput.value);
						this.getInput.value = '';
					}}
				>
					<input type="text" placeholder="Add Task" ref={(e) => (this.getInput = e)} />
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

const mapDispatch = (dispatch) => ({
	submit: (value) => dispatch(addTask(value))
});

export default connect(null, mapDispatch)(Input);
