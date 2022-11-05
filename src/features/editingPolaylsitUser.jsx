import {createSlice} from '@reduxjs/toolkit';

const initValue = ""

const editingPlaylistSlice = createSlice({
    name:"editing",
    initialState:{value:initValue},
    reducers:{
        addIdFotEditing:(state ,actions)=>{
            state.value = actions.payload;
        },
        
    }

})
export const {addIdFotEditing} = editingPlaylistSlice.actions;
export default editingPlaylistSlice.reducer;
