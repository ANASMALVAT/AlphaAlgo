import React, {  useLayoutEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginSuccess } from "./components/alphaLogin/login-components/loginLanding";
import { toggelUserLoginFalse, toggelUserLoginTrue } from "./redux/slices/userAuthentication";
import { verifyToken } from "./services/verifyToken";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import Team from "./components/alphaHome/alpha-pages/team/teamPage";
import ReviewPage from "./components/alphaHome/alpha-pages/reviews/reviewPage";
import AlphaHomePage from './components/alphaHome/alphaHome';
import AlphaPlatform from "./components/alphaPlatform/mainPage";
import CodingProblems from "./components/alphaProblem/codingProblemsMainPage";
import Purchase from "./components/alphaHome/alpha-pages/purchase/purchasePage";
import SuccessfulPurchase from "./components/alphaHome/alpha-pages/purchase/purchaseSuccess";

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
  
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        pauseOnHover={false}
        draggable={true}
        closeOnClick={true}
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AlphaHomePage/>} />
          <Route path="/team" element={<Team />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/problems" element={<CodingProblems />} />
          <Route path="/user/success/:token" element={<LoginSuccess />} />
          <Route path="/payment-successful" element={<SuccessfulPurchase />} />
          <Route path="/problems/:problemId" element={<AlphaPlatform />} />
          <Route path="/reviews" element={<ReviewPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
