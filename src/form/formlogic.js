import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name:"formdata",
    initialState:{
        
        item:[]
    }
    ,
    reducers:{
        datas:(state,action)=>{
            
                state.item.push(action.payload)
        
               
        },
        datas2:(state,action)=>{
            
            state.item.push(action.payload)
    
           
    },datas3:(state,action)=>{
            
        state.item.push(action.payload)

       
}

        
    }
})


export const {datas,datas2,datas3} = slice.actions
export let prod = (state)=> state.formdata.item
export default slice.reducer