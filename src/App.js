import logo from './logo.svg';
import './App.css';
import AlphaHomePage from './components/alphaHome/mainPage';
import Landing from './components/alphaPlatform/mainPage';
import SideNav from './layouts/navbar/sideNav';

function App() {

  return (
    <div className="App">
      <SideNav/>
      <AlphaHomePage/> 
      <Landing/>
    </div>
  );
}

export default App;
