import {configureStore} from "@reduxjs/toolkit"
import alphaPlatformReducer from "./slices/alphaPlatformSlice"
import dropdownSliceReducer from "./slices/dropDownSlice"
import problemCategories from "./slices/problemCategorySlice"
import problemTypeSlice from "./slices/problemTypeSlice"
import userLoginWindow from "./slices/userComponentSlice"
import userLogin from "./slices/userAuthentication"
import alphaNotification from "./slices/alphaNotification"
import alphaRunning from "./slices/alphaRunning"
import alphaConsole from "./slices/alphaConsole"
import userAuthorization from "./slices/userAuthorizationSlice"
import outputWindowSlice from "./slices/outputWindowSlice"
import  userSubmissionSlice  from "./slices/userSubmission"

const store = configureStore({
    reducer:{
      alphaPlatform:alphaPlatformReducer,
      dropdownValues:dropdownSliceReducer,
      problemCategories:problemCategories,
      userLoginWindow:userLoginWindow,
      userLogin:userLogin,
      alphaNotification:alphaNotification,
      alphaRunning:alphaRunning,
      alphaConsole:alphaConsole,
      problemType:problemTypeSlice,
      userAuthorization:userAuthorization,
      outputWindow:outputWindowSlice,
      userSubmission:userSubmissionSlice
    },
  });

  export default store;