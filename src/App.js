import React from "react";
import { createStore } from "redux"
import { Provider, connect,useSelector } from "react-redux";
import DoubleCounter from "./DoubleCounter";
import Todo from "./Todo";
import store from "./store/store";

// const INITIAL_STATE = 0;
// function reducer(state = INITIAL_STATE, action) {
//     switch(action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//     }

//     return state;
// }

// const store = createStore(reducer);



const App = (props) => {
    const add = () => {
        props.dispatch({type: "INCREMENT"})
    }

    const sub = () => {
        props.dispatch({type: "DECREMENT"})

    }
    return (
        <div>
            <Todo />
            {/* <h1>Counter App</h1>
            <h1>Counter: {props.counter}</h1>
            <DoubleCounter />
            <button onClick={add}>Increment</button>
            <button onClick={sub}>Decrement</button> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}


const ConnectedApp = connect(mapStateToProps) // newfunction
const NewApp =  ConnectedApp(App) // new Component

const Root = () => {
    return (
        <Provider store={store}>
            <NewApp text="hello"/>
        </Provider>
    )
}
export default Root;
// import {useState} from  'react'
// const Todo =()=>{

// }
// const TodoInput =()=>{
//    const dispatch = useDispatch()
//    const [newTodo , setnewTodo]=useState()

//    return(
//      <div>
//        <input value={newT}/>
//      </div>
//    )

// }
// const App = (props) => {
//   return(
//     <div>
//       <p>TODO</p>
//       <Todo/>
//       <TodoInput/>
//     </div>
//   )
// }
