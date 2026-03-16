import React, { useState } from 'react'

const Signup = () => {
    const [userData, setUserData] = useState({
        name :"",
        email : "",
        password : ""
    })
    const[]=useState("");
    const handleChange=(e)=>{
        e.preventDefault();
        setUserData((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userData);
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type="name" 
            name="name"
            value={userData.name} 
            onChange={handleChange}
            placeholder='Enter the name'/>
            <br /><br />
            <label>Email : </label>
            <input type="email" 
            value={userData.email} 
            name="email"
            onChange={handleChange} 
            placeholder='Enter the Email'/>
          <br /><br />
            <label>Password</label>
            <input type="password" 
            name="password"
            value={userData.password} 
            onChange={handleChange}
            placeholder='Enter the password'/>
            <br /><br />
            
             </form>
    </div>
  )
}

export default Signup