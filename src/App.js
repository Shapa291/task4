import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter"
import {useAuthState} from "react-firebase-hooks/auth";
import { Context } from ".";



function App() {

  const {auth} = useContext(Context)
  const [loading] = useAuthState(auth)

  
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
