import { createSlice } from "@reduxjs/toolkit";

export const userComponentSlice = createSlice({
    name:'userLoginComponent',
    initialState:{showLogin:false},
    reducers:{
        toggelLogin : (state) =>{
            state.showLogin = !state.showLogin;
        }
    }
})
export  const {toggelLogin} = userComponentSlice.actions;
export default userComponentSlice.reducer;