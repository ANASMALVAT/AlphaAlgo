import React, {  useLayoutEffect } from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { LoginSuccess } from "./components/alphaLogin/login-components/loginLading";
import { toggelUserLoginFalse, toggelUserLoginTrue } from "./redux/slices/userAuthentication";
import { verifyToken } from "./services/verifyToken";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import Team from "./components/alphaHome/home-page-components/team/team";
import AlphaHomePage from './components/alphaHome/alphaHome';
import AlphaPlatform from "./components/alphaPlatform/mainPage";
import CodingProblems from "./components/alphaProblem/codingProblemsMainPage";
import AlphaGPT from "./components/alphaHome/home-page-components/alpha-gpt/alphaGPT";
import Purchase from "./components/alphaHome/home-page-components/purchase/purchase";
import SuccessfulPurchase from "./components/alphaHome/home-page-components/purchase/purchaseSuccess";

function App() {

  const dispatch = useDispatch();
  
  useLayoutEffect(async () => {

      if(localStorage.getItem('csrf-token')){

        const verifyResult = await verifyToken();
        if(!verifyResult.success){
          dispatch(toggelUserLoginFalse());
          localStorage.clear();
        }else{
          dispatch(toggelUserLoginTrue());
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
      path: "problems/:problemId",
      element:<AlphaPlatform/>
    },
    {
      path: "/coding-platform",
      element:<AlphaPlatform/>
    },
    {
      path:"/problems",
      element:<CodingProblems/>
    },
    {
      path:"/user/success/:token",
      element:<LoginSuccess />
    }
    ,
    {
      path:"/purchase",
      element:<Purchase />
    },
    {
      path:"/payment-successful",
      element:<SuccessfulPurchase/>
    },
    {
      path:"/dev",
      element:<AlphaGPT/>
    }
  ]);
  

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        pauseOnHover={false}
        draggable={true}
        closeOnClick={true}
        theme="light"
      />
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
