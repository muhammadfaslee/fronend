import React from "react";
import Header from "./component/navbar";
import Home from "./component/home";
import CallVoiceRecord from "./component/record";
import './style/record_voice.css';


 function App(){
  
  return (
    <Header />,
    <Home />,
    <CallVoiceRecord />
  )
}

export default App
