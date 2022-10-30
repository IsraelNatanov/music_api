import {createSlice} from '@reduxjs/toolkit';

const initValue = {
    
    id: "",
    id_plylist: "",
    images: "",
    name: "",
    preview_url: "",
}

const createSungSlice = createSlice({
    name:"sung",
    initialState:initValue,
    reducers:{
        // addNmae:(state ,actions)=>{
        //     state.namePlaylist = actions.payload.nameFromUser;
        // },
        // addId:(state ,actions)=>{
        //     state.idPlaylist = actions.payload.idFromUser;
        // }
    }

})
