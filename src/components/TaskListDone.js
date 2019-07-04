import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClickedUndo, deleteTask } from '../actions';

export class TaskListDone extends Component {
	render() {
		const undone = {
			background: 'red',
			listStyle: 'none',
			margin: '5px'
		};
		return (
			<div>
				<h2>Task Done:</h2>
				<ul>
					{this.props.selectedList.map((task) => {
						return (
							<div>
								<li key={task.key} style={undone} onClick={() => this.props.getClickedUndo(task.key)}>
									{task.text}
								</li>
								<button onClick={() => this.props.deleteTask(task.key)}>Delete</button>
							</div>
						);
					})}
				</ul>
			</div>
		);
	}
}

const mapDispatch = (dispatch) => ({
	getClickedUndo: (idSelected) => dispatch(getClickedUndo(idSelected)),
	deleteTask: (idSelected) => dispatch(deleteTask(idSelected))
});

const mapState = (state) => ({
	selectedList: state.selectedList
});
export default connect(mapState, mapDispatch)(TaskListDone);
