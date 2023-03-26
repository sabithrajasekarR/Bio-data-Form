import { configureStore } from "@reduxjs/toolkit";
import formslice from "../formlogic";


export default configureStore({
    reducer:{
        formdata: formslice
    }
})