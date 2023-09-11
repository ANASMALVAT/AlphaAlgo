import React, { useEffect,useRef, useLayoutEffect } from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Team from "./components/alphaHome/home-page-components/team/team";
import AlphaHomePage from './components/alphaHome/alphaHome';
import AlphaPlatform from "./components/alphaPlatform/mainPage";
import CodingProblems from "./components/alphaHome/home-page-components/problems/codingProblemsMainPage";
import { LoginSuccess } from "./components/alphaLogin/login-components/loginSuccess";
import { toggelUserLoginFalse, toggelUserLoginTrue } from "./redux/slices/userAuthentication";
import { verifyToken } from "./services/verifyToken";
import { ToastContainer,toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();

  useLayoutEffect(async () => {

      if(localStorage.getItem('jwt-token')){

        const verifyResult = await verifyToken();

        if(!verifyResult.success){
          
          dispatch(toggelUserLoginFalse());
          toast("Session Expired, Please Login Again!",{autoClose:5000});

        }else{

          dispatch(toggelUserLoginTrue());
          console.log("session mentained");
          
        }
      }
      else{
        dispatch(toggelUserLoginFalse());
      }
  },[])

  const router = createBrowserRouter
  ([
    {
      path: "/",
      element: <AlphaHomePage/>
    },
    {
      path: "team",
      element: <Team/>,
    },
    {
      path: "coding-platform",
      element:<AlphaPlatform/>
    },
    {
      path:"/problems",
      element:<CodingProblems/>
    },
    {
      path:"/user/success",
      element:<LoginSuccess />
    }
  ]);
  

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        pauseOnHover={false}
        draggable={true}
        closeOnClick={true}
      />
      <React.StrictMode>
          <RouterProvider router={router}/>
      </React.StrictMode>

    </div>
  );
}

export default App;
