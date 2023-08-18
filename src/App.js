import logo from './logo.svg';
import './App.css';
import Landing from './components/alphaPlatform/mainPage';
import { useState } from 'react';

function App() {

  const [isOpen,setIsOpen] = useState(true);
  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;
