import React, { useState } from "react";
import './page.css'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { datas } from "./formlogic";
function Page1() {
const history = useHistory()
const dispatch = useDispatch()
    const [form, setform] = useState({
        username: "",
        email: "",
        contact: "",
        dob: "",
        address: ""
       

    })

    const [error, seterror] = useState({
        usernameErr: "",
        emailErr: "",
        contactErr: "",
        dobErr: "",
        addressErr: ""
        

    })


    function handle(e) {

        let obj = { ...form };
        obj[e.target.name] = e.target.value
        setform(obj)
       
         

    }
    
    let checkvalue=(e)=>{
        let emailvalid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-z]+).([a-z]{2,3})$/
        e.preventDefault()
        let errorobj = {}
        for (let props in form) {
            if (form[props].trim().length <= 0) {
                errorobj[props + 'Err'] = "Fill the above field"
                if(form[props] == "email"){
                if(emailvalid.test(form[props]) === false){
                    errorobj[props + 'Err'] = "Invalid Email"
                  }}
            }
            

            else {
                errorobj[props + 'Err'] = ""
              
            }}
            
    
            
        dispatch(datas(form))
        seterror(errorobj)
        let checkarray = Object.values(errorobj)
        let checkfilter = checkarray.filter((e)=>{
            return e.length
        })
        if(checkfilter.length==0){
            history.push('/page2')
        }
        else{
            alert('fill all the field')
            console.log(errorobj);
        }
        

        console.log(checkfilter);
        


    }


    return (


        <>
            
            <h1>BASIC INFORMATION</h1>
            <form className="form-main">
                
                <label>Enter Your Name</label>
                <input type='text' name="username" placeholder="Enter your name" onChange={(e) => { handle(e) }} />
                <h3>{error.usernameErr}</h3>
                <label>Email Address</label>
                <input type='text' name="email" placeholder="Enter your email" onChange={(e) => { handle(e) }} />
                <h3>{error.emailErr}</h3>
                <label>Contact Number</label>
                <input type='text' name="contact" placeholder="Enter your phone number" onChange={(e) => { handle(e) }} />
                <h3>{error.contactErr}</h3>
                <label>Date Of Birth</label>
                <input type='date' name="dob" onChange={(e) => { handle(e) }} />
                <h3>{error.dobErr}</h3>
                <label>Address</label>
                <input type='text' name="address" onChange={(e) => { handle(e) }} />
                <h3>{error.addressErr}</h3>
                <button onClick={(e) => { checkvalue(e) }} className="first-btn">Next</button>

            </form>



        </>

    )
}



export default Page1