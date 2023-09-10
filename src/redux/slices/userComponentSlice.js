import { createSlice } from "@reduxjs/toolkit";

export const userWindowSlice = createSlice({
    name:'userLoginWindow',
    initialState:{showLoginWindow:false},
    reducers:{
        toggelLoginWindow : (state) =>{
            state.showLoginWindow = !state.showLoginWindow;
        }
    }
})
export  const { toggelLoginWindow } = userWindowSlice.actions;
export default userWindowSlice.reducer;