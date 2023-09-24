import {configureStore} from "@reduxjs/toolkit"
import alphaPlatformReducer from "./slices/alphaPlatformSlice"
import dropdownSliceReducer from "./slices/dropDownSlice"
import windowWidthReducer from "./slices/layoutSlice"
import problemCategories from "./slices/problemCategorySlice"
import userLoginWindow from "./slices/userComponentSlice"
import userLogin from "./slices/userAuthentication"
import alphaNotification from "./slices/alphaNotification"

const store = configureStore({
    reducer:{
      alphaPlatform:alphaPlatformReducer,
      dropdownValues:dropdownSliceReducer,
      layoutValue:windowWidthReducer,
      problemCategories:problemCategories,
      userLoginWindow:userLoginWindow,
      userLogin:userLogin,
      alphaNotification:alphaNotification,


  
    },
  });

  export default store;