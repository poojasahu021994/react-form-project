import { useState } from "react"

const Form =()=>{
    let[inputname, setInput]=useState(
        {
            username:'',
            address:'',
            age:'',
            email:'',
            number:''
        }
    )
    const hinput=(event)=>{
        const{name,value}=event.target;
        //console.log(event.target.value)
        setInput(
            {
                ...inputname,
                [name]:value
            }
        )
    }

    const finalsumit=()=>{
        event.preventDefault();
        console.log(inputname)
    }
    return(
        <>
        <form onSubmit={finalsumit}>
        <label htmlFor="">Name</label>
        <input type="text" name="username" value={inputname.username} onChange={hinput}/><br></br><br></br>
        
        <label htmlFor="">Age</label>
        <input type="text" name="age" value={inputname.age} onChange={hinput}/><br></br><br></br>
        
        <label htmlFor="">Email</label>
        <input type="email" name="email" value={inputname.email} onChange={hinput}/><br></br><br></br>
        
        <label htmlFor="">Number</label>
        <input type="number" name="number" value={inputname.value} onChange={hinput}/><br></br><br></br>

        <input type="submit"/>
        </form>
        </>
    )
}
export default Form