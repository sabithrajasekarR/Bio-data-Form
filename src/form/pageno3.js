import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { datas3 } from "./formlogic";

function Page3() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [form, setform] = useState({
        cposition: "",
        ccompany: "",
        cstart: "",
        cend: ""
    })
    const [error, setError] = useState({
        cpositionErr: "",
        ccompanyErr: "",
        cstartErr: "",
        cendErr: ""
    })

    function handle(e) {
        let obj = { ...form };
        obj[e.target.name] = e.target.value
        setform(obj)
    }

    let checkvalue = (e) => {
        e.preventDefault()
        let errorobj = {}
        for (let props in form) {
            if (form[props].trim().length == 0) {
                errorobj[props + 'Err'] = "Fill the above field"
            }
            else {
                errorobj[props + 'Err'] = ""

            }
        }

        setError(errorobj)
        let checkarray = Object.values(errorobj)
        let checkfilter = checkarray.filter((e) => {
            return e.length
        })
        if (checkfilter.length == 0) {
            history.push('page4')
            dispatch(datas3(form))
        }
        else {
            alert('Fill all the field')
            console.log(errorobj);
        }
    }
    return (
        <>

            <h1>CAREER</h1>
            <form className="form-main">
                <label>Position</label>
                <input type='text' placeholder="Enter your position" name="cposition" onChange={(e) => { handle(e) }}></input>
                <h3>{error.cpositionErr}</h3>
                <label>Company name</label>
                <input type='text' placeholder="Enter company name" name="ccompany" onChange={(e) => { handle(e) }}></input>
                <h3>{error.ccompanyErr}</h3>
                <label>Start date</label>
                <input type='date' name="cstart" onChange={(e) => { handle(e) }} />
                <h3>{error.cstartErr}</h3>
                <label>End date</label>
                <input type='date' name="cend" onChange={(e) => { handle(e) }} />
                <small> *Optional if it's a currently working organisation/company</small>
                <h3>{error.cendErr}</h3>
                <div className="btns"><Link to='/page2'>
                    <button>Previous</button></Link>
                    <button onClick={(e) => { checkvalue(e) }}>Next</button>
                </div>

            </form>
        </>
    )
}

export default Page3