import logo from './logo.svg';
import './App.css';
import LoginButton from "./components/login"
import LogoutButton from "./components/logout"
import React, {useEffect} from "react";
import {gapi} from "gapi-script"

const clientId = "722191149866-k9uhh2fmc5mkgr7ha4b4g9r65e19a5kr.apps.googleusercontent.com"

function App() {
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  })
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
    </div>
  )
}

export default App;
