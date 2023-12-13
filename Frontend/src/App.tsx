import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import Todo from './components/pages/Todo'

const App: React.FC = () => {

  return (
    <div className="App">
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
