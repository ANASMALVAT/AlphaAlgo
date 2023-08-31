import {configureStore} from "@reduxjs/toolkit"
import alphaPlatformReducer from "./slices/alphaPlatformSlice"

const store = configureStore({
    reducer:{
      alphaPlatform:alphaPlatformReducer
    },
  });

  export default store;