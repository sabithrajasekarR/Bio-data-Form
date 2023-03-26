import React from "react";
import Page3 from "./pageno3";
import { useSelector } from "react-redux";
import {prod} from './formlogic'
function Page4(){
    const showdata = useSelector(prod)
    return(
        
        showdata.map((ele)=>{
            return(
                <>
                <h1>{ele.username}</h1>
                <h1>{ele.institue}</h1>
                </>
                
            )
        })
        
        )
    
}

export default Page4