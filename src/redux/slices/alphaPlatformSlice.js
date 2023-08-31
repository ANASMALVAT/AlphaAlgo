import { createSlice } from "@reduxjs/toolkit";

export const alphaPlatformSlice = createSlice({

    name:"alphaPlatform",

    initialState: { value : { editor:true, console:true, gpt:true,isConsoleGpt:true} },

    reducers:{

        setDifferentEditor : (state,action) => {
            state.value = action.payload;
        },
        setGPT : (state, action) => {
            state.value = action.payload;
        },
        setConsole: (state,action) => {
            state.value = action.payload;
        },
        setDefault :(state,action) => {
            state.value = action.payload;
        }

    },
});

export const {setDifferentEditor,setGPT,setConsole,setDefault} = alphaPlatformSlice.actions;

export default alphaPlatformSlice.reducer;