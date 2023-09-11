import { createSlice } from "@reduxjs/toolkit";

export const alphaNotification = createSlice({
    name:'alphaNotification',
    initialState:{Notification : ""},
    reducers  : {
        showNotification: (state,action) => {
            state.Notification =  action.payload;
        }
    }
})

export const {setDifferentEditor,setGPT,setConsole,setDefault} = alphaPlatformSlice.actions;

export default alphaPlatformSlice.reducer; 