//import React, { useState } from 'react';
//import Layout from "./layouts/Layout"
//import Home from "./pages/Home"
import router from "./router";
import { RouterProvider } from "react-router-dom";
//import { Provider } from "react-redux";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import user_actions from "./store/actions/users";
const { signin_token } = user_actions;
function App() {
 

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      dispatch(signin_token());
    }
  }, []);
  return <RouterProvider router={router} />;
}
//   return (
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>  
//   )
// }

export default App
