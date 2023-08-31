import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
        name:"layoutValue",
        initialState:{width:true,toggelHeight:0,swapWindow:true},
        reducers :{
            toggelWidth: state =>{
                state.width = !state.width;
            },
            toggelHeight : state => {
                if (state.toggelHeight === 2) {
                    state.toggelHeight = 1;
                  } else if (state.toggelHeight === 1) {
                    state.toggelHeight = 0;
                  } else {
                    state.toggelHeight = 2;
                  }
            },
            toggelWindow: state => {
                state.swapWindow = !state.swapWindow;
            }

        }
})

export const {toggelWidth,toggelHeight,toggelWindow} = layoutSlice.actions;

export default layoutSlice.reducer;