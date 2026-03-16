import React,{useState} from 'react'

const Contact = () => {
  const [name1,setName]=useState("Chitti");
  const toggleName=()=>{
    setName(name1==="Chitti"?"Vikku":"Chitti");
  }
  return (
    <div>
      <h1>Name : {name1}</h1>
      <button onClick={toggleName}>Toogle</button>
      

    </div>
  )
}

export default Contact