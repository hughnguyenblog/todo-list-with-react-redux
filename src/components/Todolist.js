import React, { Component } from 'react';

import TaskList from './TaskList';
import TaskListDone from './TaskListDone';
import Input from './Input';

export class Todolist extends Component {
	render() {
		return (
			<div>
				<h2>Todolist</h2>
				<hr />
				<Input />
				<hr />
				<TaskList />
				<hr />
				<TaskListDone />
			</div>
		);
	}
}

export default Todolist;
