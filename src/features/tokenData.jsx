import {createSlice} from '@reduxjs/toolkit';

const initValue = {
  tokenResponse: false,
}

const tokenDataSlice = createSlice({
    name:"token",
    initialState:initValue,
    reducers:{
      isToken:(state ,actions)=>{
            state.tokenResponse = true;
      },
      
        
    }

})
export const {isToken} = tokenDataSlice.actions;
export default tokenDataSlice.reducer;
