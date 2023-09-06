import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Team from "./components/alphaHome/home-page-components/team/team";
import AlphaHomePage from './components/alphaHome/alphaHome';
import AlphaPlatform from "./components/alphaPlatform/mainPage";
import CodingProblems from "./components/alphaHome/home-page-components/problems/codingProblemsMainPage";
import UserLogin from './components/alphaLogin/login-components/userLogin';

function App() {

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
    // {
    //   path:"/login",
    //   element:<UserLogin/>
    // }
  ]);
  

  return (
    <div className="App">

      <React.StrictMode>
          <RouterProvider router={router}/>
      </React.StrictMode>

    </div>
  );
}

export default App;
