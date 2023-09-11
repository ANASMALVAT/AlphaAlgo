import { createSlice } from "@reduxjs/toolkit";

export const userWindowSlice = createSlice({
    name:'userLoginWindow',
    initialState:{showLoginWindow:false},
    reducers:{
        toggelLoginWindowTrue : (state) =>{
            state.showLoginWindow = true;
        },
        toggelLoginWindowFalse: (state) => {
            state.showLoginWindow = false;
        }

    }
})
export  const { toggelLoginWindowTrue, toggelLoginWindowFalse } = userWindowSlice.actions;
export default userWindowSlice.reducer;