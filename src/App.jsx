import React, { useState } from 'react';
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import router from "./router";
import { RouterProvider } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  

  return (
    // <Layout>
    //     <Home />
    // </Layout>
    <RouterProvider router={router} />
  )
}

export default App
