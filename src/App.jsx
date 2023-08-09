import React, { useState } from 'react';
import Layout from "./layouts/Layout"
import Home from "./pages/Home"

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <Layout>
        <Home />
    </Layout>
   
  )
}

export default App;
