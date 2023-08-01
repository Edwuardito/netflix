import './App.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Paypal from './Pages/Paypal'
import Home from './Pages/Home'
function App() {
  const user =  'Edwin'
  const [ text] = useTypewriter({
    words: ['Welcome to resume!','Have fun creating your resume','Good Luck!'],
    loop:{},
    typeSpeed:20,
    deleteSpeed:15,
  })
  return (
    <div>
        <div className='container'>
          <span className='text'> { text } </span>
          <span className='cursor'> <Cursor/> </span>
        </div>
      <Router>
        {
          !user ? (<Login/>) : (
            <Routes>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/checkout' element={<Paypal/>}/>
              <Route path='/' element={<Home/>}/>
            </Routes>
          )
        }
      </Router>
    </div>
  )
}

export default App
