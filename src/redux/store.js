import {configureStore} from "@reduxjs/toolkit"
import alphaPlatformReducer from "./slices/alphaPlatformSlice"
import DropdownSliceReducer from "./slices/dropDownSlice"

const store = configureStore({
    reducer:{
      alphaPlatform:alphaPlatformReducer,
      dropdownValues:DropdownSliceReducer,
      
    },
  });

  export default store;