const INITIAL_STATE = {
  counter: 0,
  todos: [],
  calc: 0,
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
      break;
    case "DELLALL_TODO":
    newState.todos = []
    break;
    case "ADD":
      newState.calc = action.valA + action.valB;
      break;
    case "SUB":
      newState.calc = action.valA - action.valB;
      break;
    case "MULT":
      newState.calc = action.valA * action.valB;
      break;
    case "DIVI":
      newState.calc = action.valA / action.valB;
  }

  return newState;
}

export default reducer;
