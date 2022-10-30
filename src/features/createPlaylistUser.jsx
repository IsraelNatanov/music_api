import {createSlice} from '@reduxjs/toolkit';


const initValue = {
    namePlaylist: "שם הפלייליסט",
    idPlaylist: ""
}

const namePlaylistSlice = createSlice({
    name:"namePlaylist",
    initialState:initValue,
    reducers:{
        addNmae:(state ,actions)=>{
            state.namePlaylist = actions.payload.nameFromUser;
        },
        addId:(state ,actions)=>{
            state.idPlaylist = actions.payload.idFromUser;
        }

    }
})
export const {addNmae, addId} = namePlaylistSlice.actions
export default namePlaylistSlice.reducer
