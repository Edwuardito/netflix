import './App.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import Paypal from './Pages/Paypal/Paypal'
import Home from './Pages/Home/Home'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/UserSlice'
function App() {
  const dispatch = useDispatch()
  const user =  useSelector(selectUser)
  const [ text] = useTypewriter({
    words: ['Welcome to resume!','Have fun creating your resume','Good Luck!'],
    loop:{},
    typeSpeed:20,
    deleteSpeed:15,
  })
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        } 
        ))
      }else dispatch(logout)
    })
    return unsuscribe
  },[dispatch])
  return (
    <div>
        {/* <div className='container'>
          <span className='text'> { text } </span>
          <span className='cursor'> <Cursor/> </span>
        </div> */}
      <Router>
        {
          !user ? (<Login/>) : (
            <Routes>
              <Route path='login' element={<Login/>}/>
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
