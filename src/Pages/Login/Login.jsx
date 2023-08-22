import React, { useState } from 'react'
import logo from '../../images/Logo-Netflix.png'
import styles from './Login.module.css'
import { NetflixButton, NetflixInput } from '../../styled/stiledcomponents'
import { Typography } from '@mui/material'
import SingUp from '../SingUp/SingUp'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router'
const Login = () => {
  const navigate = useNavigate()
  const [singIn, setSingIn] = useState(false)
  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword('a20edwin02@gmail.com', '12345678A')
    .then(authUser => { navigate('/') })
    .catch((err) => alert(err.message) )
  } 
  return (
    <div className={styles.root}>
      <img src={logo} alt="logo" className={styles.logo}/>
      <NetflixButton fixed className={styles.iniciarSesion} onClick={signIn}>Preview Proyect</NetflixButton>
      <div className={styles.info}>
        {
          !singIn ? <SingUp/> : <>
            <Typography variant='h4' gutterBottom>
              Unlimited films, TV programmes and more.
            </Typography>
            <Typography variant='h5'>
              Whatch anywhere. Cancel at any time.
            </Typography>
            <Typography variant='h5' gutterBottom>
              Ready to watch ? En ter your email to create or restart your membership.
            </Typography>
            <div className={styles.inputBlock}>
              <NetflixInput placeholder='Email address'/>
              <NetflixButton started> GET STARTED</NetflixButton>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Login