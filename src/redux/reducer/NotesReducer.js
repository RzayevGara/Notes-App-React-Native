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
                // if(action.payload.id===item.id){
                //     return {...obj, notes: action.payload}
                // }
                return action.payload.id===item.id
            })
            if(check){
                let newObj = state.notes.map((item)=>{
                    if(action.payload.id===item.id){
                        return {...state.notes, notes: action.payload}
                    }
                })
                state.notes = newObj
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