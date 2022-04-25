import React, { useState } from 'react';
import './App.css';
// import { About } from './components/About';
import { Alert } from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [toggleText, setToggleText] = useState('Enable dark mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#423838';
      document.body.style.color = '#dca0a0';
      setToggleText('Disable dark mode');
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() =>{
      //   document.title = 'TextUtils is Amazing now'
      // }, 2000);
      // setInterval(() =>{
      //   document.title = 'Install TextUtils now';
      // }, 2500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setToggleText('Enable dark mode')
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
    {/* <Router> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleText={toggleText} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About/> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
