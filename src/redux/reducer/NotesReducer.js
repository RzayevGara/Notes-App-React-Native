import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    notes: []
}

export const NotesReducer = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (state, action)=>{
            let check = state.notes.find((item)=>{
                return action.payload.id===item.id
            })
            if(check){
                let editObj = state.notes.map((item)=>{
                    if(action.payload.id===item.id){
                        console.log("tapdi")
                        return {...action.payload}
                    }else{
                        return item
                    }
                })
                state.notes = editObj
            }
            else{

                state.notes.push(action.payload)
            }
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {setNotes} = NotesReducer.actions
  
  export default NotesReducer.reducer