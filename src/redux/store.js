import {configureStore} from "@reduxjs/toolkit"
import alphaPlatformReducer from "./slices/alphaPlatformSlice"
import dropdownSliceReducer from "./slices/dropDownSlice"
import windowWidthReducer from "./slices/layoutSlice"
import problemTopic from "./slices/problemTopicSlice"
import userLoginComponent from "./slices/userComponentSlice"

const store = configureStore({
    reducer:{
      alphaPlatform:alphaPlatformReducer,
      dropdownValues:dropdownSliceReducer,
      layoutValue:windowWidthReducer,
      problemTopic:problemTopic,
      userLoginComponent:userLoginComponent
    },
  });

  export default store;