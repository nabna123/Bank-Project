import React from 'react'
import Shared from './component/Shared'
import Dashboard from './component/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Requestform from './component/Requestform'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shared/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='/Requestform'element={<Requestform/>}/>
          </Route>
        </Routes>
       </BrowserRouter>
      
      
      
    </div>
  )
}

export default App
