import {createSlice} from "@reduxjs/toolkit";


export const userSubmissionSlice = createSlice({

    name: "userSubmission",
    initialState: {
        userSubmission : {
            code:``,
            viewDialog: false
        }

    },
    reducers :{
        setUserSubmission : (state,action) => {
            state.userSubmission.code = action.payload;
            state.userSubmission.viewDialog = true;
        },
        closeUserSubmissionDialog : (state) => {
            state.userSubmission.code = ``
            state.userSubmission.viewDialog = false;
        }
    }
});

export const {setUserSubmission,closeUserSubmissionDialog} = userSubmissionSlice.actions;

export default userSubmissionSlice.reducer;