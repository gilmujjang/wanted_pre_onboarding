import './App.css';
import Header from './components/header';
import Carousel from './components/carousel';
import React, {useState,useEffect} from "react";
import { debounce } from "lodash";

function App() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = debounce(() => {
    setSize(window.innerWidth);
  }, 50);

  return (
    <div className="App">
      <Header size={size}/>
      <Carousel size={size}/>
    </div>
  );
}

export default App;
