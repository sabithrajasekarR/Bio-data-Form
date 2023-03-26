import React from "react";
import Page3 from "./pageno3";
import { useSelector } from "react-redux";
import { prod } from './formlogic'
import { useHistory } from "react-router-dom";
function Page4() {
    const history = useHistory()
    const showdata = useSelector(prod)
    let submitbtn=(e)=>{
        alert("THANKS FOR SUBMITING")
        history.push('/page1')
    }
    return (

        showdata.map((ele,ind) => {
            
            return (
                
                <div className="page4">
                    
                    <h3>NAME</h3>  <span>{ele.username} </span><br />
                    <h3>EMAIL</h3> <span><p> {ele.email}</p></span><br />
                    <h3>CONTACT</h3> <span> <p>:{ele.contact}</p></span><br />
                    <h3>DOB</h3>  <span><p>:{ele.dob}</p></span><br />
                    <h3>ADDRESS</h3>  <span><p>:{ele.address}</p></span><br />

                    <h1>EDUCATION INFORMATION</h1>
                    <h3>INSTITUTE</h3><span><p>:{ele.institue}</p></span><br />
                    <h3>START DATE</h3>  <span><p>:{ele.start}</p></span><br />
                    <h3>END DATE</h3> <span><p>:{ele.end}</p></span><br />
                    <h3>DEGREE</h3><span><p>:{ele.degree}</p></span><br />
                    <h3>subject</h3><span><p>:{ele.subject}</p></span><br />

                    <h1>CAREER</h1>
                    <h3>POSITION</h3><span><p>:{ele.cposition}</p></span><br />
                    <h3>COMPANY</h3><span><p>:{ele.ccompany}</p></span><br />
                    <h3>START DATE</h3> <span> <p>:{ele.cstart}</p></span><br />
                    <h3>END DATE</h3> <span><p>:{ele.cend}</p></span><br />
                    
                    <button onClick={(e)=>{submitbtn(e)}}>Submit</button>






                </div>

            )
        })

    )

}

export default Page4