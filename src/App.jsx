//import React, { useState } from 'react';
//import Layout from "./layouts/Layout"
//import Home from "./pages/Home"
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
 import store from './store/store';
function App() {
 // const [count, setCount] = useState(0);
  

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>  
  )
}

export default App
