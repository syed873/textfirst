
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react';
import Alerts from './Components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
 
  const showalert= (message,type) =>
  {
    setAlert({
      msg:message,
      type:type

    })
     setTimeout(() => {
       setAlert(null);
     }, 1500);
  }




  const toogleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled","success");
      document.title='Textutils - Dark mode';
      //setInterval(() => {
      //  document.title='TextUtils is Amazing Mode';
      //}, 1500);
    }
    else
    {
     setMode('light');
     document.body.style.backgroundColor='white';
     showalert("Light mode has been enabled","success");
     document.title='Textutils - Light mode';
    }
  }
  return (

  <div>
    <Navbar mode={mode}  toogleMode={toogleMode}  />
    <Alerts alert={alert} />
  
     <div className='container my-3'>

        <TextForm showalert={showalert} heading="Write text here"  mode={mode}   />
   



  
  </div>
  </div>  
  );
}

export default App;
