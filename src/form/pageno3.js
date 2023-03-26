import React, { useState } from "react";
import { useHistory,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { datas } from "./formlogic";



function Page3(){
    const history = useHistory()
    const dispatch = useDispatch()
    const[form,setform]=useState({
        position:"",
        company:"",
        start:"",
        end:""

    })
    const[error,setError]=useState({
        positionErr:"",
        companyErr:"",
        startErr:"",
        endErr:""
    })

    function handle(e) {

        let obj = { ...form };
        obj[e.target.name] = e.target.value
        setform(obj)
        let obj1 = {}
         for (let props in form) {
            
            if (form[props].trim().length ==0) {
                obj1[props + 'Err'] = "Fill above field "

            

            }
           
            else {
                obj1[props + 'Err'] = " "
                
            }
            setError(obj1)

    }
    }
    
    let checkvalue = (e) => {

        e.preventDefault()
        let errorobj = {}
        for (let props in form) {
            if (form[props].trim().length == 0) {
                errorobj[props + 'Err'] = "Fill the above field"
             
                console.log(error);
            }

            else {
                errorobj[props + 'Err'] = ""
                history.push('page4')
            }


        }
        dispatch(datas(form))
        setError(errorobj)


    }
    return(
        <>
 
      <h1>CAREER</h1>
        <form className="form-main">
        <label>Position</label>
        <input type='text' placeholder="Enter your position" name="position" onChange={(e)=>{handle(e)}}></input>
        <h3>{error.positionErr}</h3>
        <label>Company name</label>
       
        <input type='text' placeholder="Enter company name" name="company" onChange={(e)=>{handle(e)}}></input>
        <h3>{error.companyErr}</h3>
        <label>Start date</label>
        <input type='date' name="start" onChange={(e)=>{handle(e)}}/>
        <h3>{error.startErr}</h3>
        <label>End date</label>
        <input type='date' name="end" onChange={(e)=>{handle(e)}}/>
        <small> Optional if it's a currently working organisation/company</small>
        <h3>{ error.endErr}</h3>
        <div className="btns"><Link to='/page2'>
                    <button>Previous</button></Link>
                    <button onClick={(e) => { checkvalue(e) }}>Next</button>
                </div>
                
        </form>
        </>
        

    )
}

export default Page3