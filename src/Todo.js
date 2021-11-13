import React from "react";
import { connect } from "react-redux";
import { useState } from "react";

const Todo = (props) => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput(e.target.value);
  };
  const onDeleteItem = (a) => {
    props.dispatch({
      type: "DELL_TODO",
      payload: a,
    });
  };

  const onAddItem = () => {
      props.dispatch({
        type: "ADD_TODO",
        payload:{
          val: input,
          key: "item " + Math.floor(Math.random() * 100000),
        },
      });
    
  };
  const dell = () => {
    props.dispatch({
      type: "DELL_TODO",
       payload:[]
      
    });
  
};
  console.log(props.todos);
  return (
    <div className="container">
      <h1>TODO APP (redux)</h1>
      <input onChange={handleClick} type={input} />
      <button onClick={onAddItem}>Add Item</button>
      <ul>
        {props.todos.map((todos, i) => {
          return (
            <li key={i}>
              {todos.val}
              <button onClick={() => onDeleteItem(todos.key)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <button onClick={dell}>Delete All</button>
    </div>
  );
};

// const arr = [{name: "Abcd"}, {name: "xyz"}] => [{name: "Abcd", index: 0}, {name: "xyz", index: 1}]
// const array =arr.map((a,i)=>{
// return {...a, index: i}
// })

// splice(8,1)

const mapStateToProps = (state) => {
 
  return {
    todos: state.todos,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addNewItem: (payload) => {
//       return dispatch({ type: "ADD_TODO", payload });
//     },
//   };
// };

const connectTodo = connect(mapStateToProps);

export default connectTodo(Todo);
