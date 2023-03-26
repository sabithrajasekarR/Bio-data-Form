import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name:"formdata",
    initialState:{
        item:[
            
        ]
    }
    ,
    reducers:{
        datas:(state,action)=>{
            
                state.item.push(action.payload)
        
               
        }
        
    }
})


export const {datas} = slice.actions
export const prod = (state)=> state.formdata.item
export default slice.reducer