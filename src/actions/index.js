export const addTask = (inputValue) => ({
	type: 'ADD_TASK',
	payload: inputValue
});

export const getClicked = (idSelected) => ({
	type: 'GET_CLICKED',
	payload: idSelected
});

export const getClickedUndo = (idSelected) => ({
	type: 'GET_CLICKED_UNDO',
	payload: idSelected
});

export const deleteTask = (idSelected) => ({
	type: 'DELETE',
	payload: idSelected
});
