import react,{useState} from 'react'
import { connect } from "react-redux";
const Calc=(props)=>{
const [valA,setValA]=useState('')
const [valB,setValB]=useState('')
const [operations,setOperations]=useState('+')
const [result,setResult]=useState('')
console.log("calc ",props.val)
const submit=()=>{
   
    if(operations==='+'){
        props.dispatch({
            type: "ADD", 
            valA: parseInt(valA),
          valB: parseInt(valB) 
          });

        // setResult(parseInt(valA)+parseInt(valB))
    }
    if(operations==='-'){
        props.dispatch({
            type: "SUB",
            valA: parseInt(valA),
          valB: parseInt(valB) 
          });
        // setResult(parseInt(valA)-parseInt(valB))
    }
    if(operations==='*'){
        props.dispatch({
            type: "MULT",
            valA: parseInt(valA),
          valB: parseInt(valB) 
          });
        // setResult(parseInt(valA)*parseInt(valB))
    }
    if(operations==='/'){
        props.dispatch({
            type: "DIVI",
            valA: parseInt(valA),
          valB: parseInt(valB) 
          });
        // setResult(parseInt(valA)/parseInt(valB))
    }
}
    return(
<div>
<h1>Simple Calculator</h1>
<h3>Result: {result}</h3>
<div>
    <input type="number" value={valA} onChange={(e)=>setValA(e.target.value)} /><br/>
    <h3>{operations}</h3>
    <input type="number" value={valB} onChange={(e)=>setValB(e.target.value)} /><br/>
    <button onClick={submit}>Submit</button>

</div>
<div>
    <button onClick={()=>setOperations('+')}>+</button>
    <button onClick={()=>setOperations('-')}>-</button>
    <button onClick={()=>setOperations('*')}>*</button>
    <button onClick={()=>setOperations('/')}>/</button>
</div>

</div>
    )
}
const mapStateToProps = (state) => {
 
    return {
      val: state.calc,
    };
  };
  
  const connectTodo = connect(mapStateToProps);
  
  export default connectTodo(Calc);
