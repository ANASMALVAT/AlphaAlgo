import React, {  useLayoutEffect,useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { toggelUserLoginFalse, toggelUserLoginTrue } from "./redux/slices/userAuthentication";
import { verifyToken } from "./services/verifyToken";
import { verifyMembership } from "./services/verifyMembership";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import Team from "./components/alphaHome/alpha-pages/team/teamPage";
import ReviewPage from "./components/alphaHome/alpha-pages/reviews/reviewPage";
import AlphaHomePage from './components/alphaHome/alphaHome';
import AlphaPlatform from "./components/alphaPlatform/mainPage";
import CodingProblems from "./components/alphaProblem/codingProblemsMainPage";
import Purchase from "./components/alphaHome/alpha-pages/purchase/purchasePage";
import { setAlphaUser } from "./redux/slices/alphaUser";
import { setAlphaPremiumUser } from "./redux/slices/alphaPremiumUser";
import Contact from "./components/alphaHome/alpha-pages/contact-us/contact";
import AccountDashboard from "./components/alphaLogin/login-components/accountDashboard";
import GithubLoginSuccess from "./components/alphaLogin/login-components/githubLoginSuccess";
import { fetchLoginCredentials } from "./services/fetchLoginCredentials";
import { setLoginCredentials } from "./redux/slices/loginCredentials";
import { toast } from "react-toastify";
function App() {

  const dispatch = useDispatch();

  useLayoutEffect(async () => {
      try{

        const response = await fetchLoginCredentials();
        dispatch(setLoginCredentials(response.credentials));

        if(localStorage.getItem('csrf-token')){
          const verifyResult = await verifyToken();
          if(!verifyResult.success){
            dispatch(toggelUserLoginFalse());
            localStorage.clear();
          }else{
            dispatch(toggelUserLoginTrue());
            dispatch(setAlphaUser({
                user_mail: verifyResult.userData.user_mail,
                user_name: verifyResult.userData.user_name,
                user_profile: verifyResult.userData.user_profile
              }));
            sessionStorage.setItem('user_completed_problems',JSON.stringify(verifyResult.userData.user_completed_problems));
            const userMembership = await verifyMembership();
            const userMembershipData = userMembership.data;
            if(userMembershipData?.success && userMembershipData?.isPremium && userMembershipData?.premiumUser){
              console.log(userMembershipData.premiumUser);
              dispatch(setAlphaPremiumUser(userMembershipData.premiumUser));
            }
          }

        }
        else{
          dispatch(toggelUserLoginFalse());
        }
    }
    catch(error) {
      toast("Alpha Algo is under maintainence!");
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
          <Route path="/github/success" element={<GithubLoginSuccess/>} />
          <Route path="/problems" element={<CodingProblems />} />
          <Route path="/problems/:problemId" element={<AlphaPlatform />} />
          <Route path="/reviews" element={<ReviewPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/account/dashboard" element={<AccountDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
