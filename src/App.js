import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Team from './components/alphaHome/home-page-components/team/team';
import AlphaHomePage from './components/alphaHome/alphaHome';
import AlphaPlatform from "./components/alphaPlatform/mainPage";
import AlphaGPTWindow from "./components/alphaPlatform/windows/alphaGptWindow";

function App() {

  const router = createBrowserRouter([
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
      path: "/gpt",
      element:<AlphaGPTWindow/>
    }
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
