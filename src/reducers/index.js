const initialState = {
	taskList: [],
	selectedList: []
};

const allReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TASK':
			const newTask = {
				key: Date.now(),
				text: action.payload
			};
			return {
				...state,
				taskList: state.taskList.concat(newTask)
			};
		case 'GET_CLICKED':
			const filteredList = state.taskList.filter((id) => {
				return id.key !== action.payload;
			});
			const selectList = state.taskList.filter((id) => {
				return id.key === action.payload;
			});
			return {
				...state,
				taskList: filteredList,
				selectedList: state.selectedList.concat(selectList)
			};
		case 'GET_CLICKED_UNDO':
			const filteredListUndo = state.selectedList.filter((id) => {
				return id.key !== action.payload;
			});
			const selectListUndo = state.selectedList.filter((id) => {
				return id.key === action.payload;
			});
			return {
				...state,
				selectedList: filteredListUndo,
				taskList: state.taskList.concat(selectListUndo)
			};
		case 'DELETE':
			const deleteList = state.selectedList.filter((id) => {
				return id.key !== action.payload;
			});
			return {
				...state,
				selectedList: deleteList
			};
		default:
			return state;
	}
};

export default allReducer;
