const INITIAL_STATE = {
  counter: 0,
  todos: [],
};

function reducer(state = INITIAL_STATE, action) {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_TODO":
      newState.todos = [...newState.todos, action.payload];
    case "DELL_TODO":
      newState.todos = newState.todos.filter(
        (todos) => todos.key !== action.payload
      );
      break
    case "DELL_TODO":

      
       return newState.todos=action.payload
     
  }
  

  return newState;
}

export default reducer;
