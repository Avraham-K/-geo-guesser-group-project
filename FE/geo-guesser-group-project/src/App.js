import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from "./pages/Admin";

function App() {
  const [isAdmin, setisAdmin] = useState(false);
  






  return (
    <div className='app-wrapper'>
<BrowserRouter>
<Routes>
<Route path="/admin" element={<Admin/>}/>

</Routes>

</BrowserRouter>



    </div>
  )
}

export default App