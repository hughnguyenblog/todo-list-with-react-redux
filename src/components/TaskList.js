import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClicked } from '../actions';

export class TaskList extends Component {
	render() {
		const done = {
			background: 'green',
			listStyle: 'none',
			margin: '5px'
		};
		return (
			<div>
				<h2>Task Lists:</h2>
				<ul>
					{this.props.taskList.map((task) => {
						return (
							<li style={done} key={task.key} onClick={() => this.props.clicked(task.key)}>
								{task.text}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

const mapDispatch = (dispatch) => ({
	clicked: (idSelected) => dispatch(getClicked(idSelected))
});

const mapState = (state) => ({
	taskList: state.taskList
});
export default connect(mapState, mapDispatch)(TaskList);
