import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { datas2 } from "./formlogic";

function Page2() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [form2, setform] = useState({
        institue: "",
        start: "",
        end: "",
        degree: "",
        subject: ""
    })
    const [error, setError] = useState(
        {
            institueErr: "",
            startErr: "",
            endErr: "",
            degreeErr: "",
            subjectErr: ""
        }
    )
    function handler(e) {
        let obj = { ...form2 };
        obj[e.target.name] = e.target.value
        setform(obj)

    }
    function checkvalue(e) {
        e.preventDefault()
        let errorobj = {}
        for (let props in form2) {
            if (form2[props].trim().length <= 0) {
                errorobj[props + 'Err'] = "Fill the above field"
                console.log(props);
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
            history.push('/page3')
            dispatch(datas2(form2))
        }
        else {
            alert('Fill all the field')

        }
    }

    return (
        <>
            <h1>Education information</h1>
            <form className="form-main">
                <label>Institute Name</label>
                <input type='text' placeholder="Enter your institue name" name="institue" onChange={(e) => { handler(e) }} />
                <h3>{error.institueErr}</h3>
                <label>Start Date</label>
                <input type='date' name="start" onChange={(e) => { handler(e) }}></input>
                <h3>{error.startErr}</h3>
                <label>End Date</label>
                <input type='date' name="end" onChange={(e) => { handler(e) }}></input>
                <small>*optional if it's currently pursuing institute/college</small>
                <h3>{error.endErr}</h3>
                <label> Degree</label>
                <input type='text' placeholder="Enter your degree name" name="degree" onChange={(e) => { handler(e) }} />
                <h3>{error.degreeErr}</h3>
                <label> Subject</label>
                <input type='text' placeholder="Enter your subject name" name="subject" onChange={(e) => { handler(e) }} />
                <h3>{error.subjectErr}</h3>
                <div className="btns"><Link to='/page1'>
                    <button>Previous</button></Link>
                    <button onClick={(e) => { checkvalue(e) }}>Next</button>
                </div>
            </form>
        </>
    )
}

export default Page2