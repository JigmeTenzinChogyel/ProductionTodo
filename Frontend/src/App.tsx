import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Todo from './pages/Todo'

const App: React.FC = () => {

  return (
    <div className="flex justify-center h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<Todo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
