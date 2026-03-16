import React,{useCallback,useState} from 'react'
import Header from '../component/Header';

const UseCallback = () => {
    const [count,setCount]=useState(0);
    const Newfun= useCallback(()=>{

    },[])
  return (
    <div>
        <Header newFun={Newfun}/>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Count++</button>
    </div>
  )
}

export default UseCallback