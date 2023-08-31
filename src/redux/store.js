import {configureStore} from "@reduxjs/toolkit"
import alphaPlatformReducer from "./slices/alphaPlatformSlice"
import DropdownSliceReducer from "./slices/dropDownSlice"
import windowWidthReducer from "./slices/layoutSlice"

const store = configureStore({
    reducer:{
      alphaPlatform:alphaPlatformReducer,
      dropdownValues:DropdownSliceReducer,
      layoutValue:windowWidthReducer,
    },
  });

  export default store;