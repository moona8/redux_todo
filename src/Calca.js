import react,{useState} from 'react'
const Calc=()=>{
const [valA,setValA]=useState(0)
const [valB,setValB]=useState(0)
const [operations,setOperations]=useState('+')
const [result,setResult]=useState(0)
const submit=()=>{
    if(operations==='+'){
        setResult(parseInt(valA)+parseInt(valB))
    }
    if(operations==='-'){
        setResult(parseInt(valA)-parseInt(valB))
    }
    if(operations==='*'){
        setResult(parseInt(valA)*parseInt(valB))
    }
    if(operations==='/'){
        setResult(parseInt(valA)/parseInt(valB))
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
export default Calc