import { createSlice } from "@reduxjs/toolkit";

export const alphaUser = createSlice({
    name:"alphaUser",
    initialState: { 
        alphaUser: { 
            user_name: "",
            user_profile: "",
            user_email: "", 
        }
    },
    reducers : {
        setAlphaUser: (state,action) => {
            state.alphaUser = action.payload
        }
    }
})

export const {setAlphaUser} = alphaUser.actions;

export default alphaUser.reducer;
