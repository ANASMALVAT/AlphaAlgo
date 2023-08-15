import logo from './logo.svg';
import './App.css';
import Landing from './components/alphaPlatform/mainPage';
import CustomInput from './components/alphaPlatform/ui/customInput';
import CodeOutput from './components/alphaPlatform/ui/codeOutput';
import SlidingPane from './components/alphaPlatform/ui/slidingPane';
import CodingNavbar from './layouts/codingNavbar';
import { useState } from 'react';
import ConsoleInput from './components/alphaPlatform/ui/ConsoleInput';

function App() {

  const [isOpen,setIsOpen] = useState(true);
  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;
