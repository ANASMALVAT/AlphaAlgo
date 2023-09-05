import { createSlice } from "@reduxjs/toolkit";

export const problemTopicSlice = createSlice({
    name:"problemTopic",
    initialState:{topic:'all'},
    reducers :{
        changeTopic : (state,action) => {
            state.topic = action.payload;
        }
    }
})

export const {changeTopic} = problemTopicSlice.actions;
export default problemTopicSlice.reducer;

