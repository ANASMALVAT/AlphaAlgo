import {configureStore} from "@reduxjs/toolkit"
import alphaPlatformReducer from "./slices/alphaPlatformSlice"
import dropdownSliceReducer from "./slices/dropDownSlice"
import windowWidthReducer from "./slices/layoutSlice"
import problemTopic from "./slices/problemTopicSlice"
import userLoginWindow from "./slices/userComponentSlice"
import userLogin from "./slices/userAuthentication"
import alphaNotification from "./slices/alphaNotification"

const store = configureStore({
    reducer:{
      alphaPlatform:alphaPlatformReducer,
      dropdownValues:dropdownSliceReducer,
      layoutValue:windowWidthReducer,
      problemTopic:problemTopic,
      userLoginWindow:userLoginWindow,
      userLogin:userLogin,
      alphaNotification:alphaNotification,


  
    },
  });

  export default store;