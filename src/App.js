import React from 'react';

import Todolist from './components/Todolist';
import './App.css';

function App() {
	return (
		<div className="container">
			<h1> Todo-List use React-redux</h1>
			<Todolist />
		</div>
	);
}

export default App;
