import React, { useEffect, useState, useContext } from "react";
import Routing from "./Router";
import { auth } from "./Utility/firebase";
import { DataContext } from "./amazonComponents/DataProvider/DataProvider";
import { Type } from "./Utility/action.type";

const App = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return <Routing />
  
  
};

export default App;
