import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { NetflixButton, NetflixInput } from '../../styled/stiledcomponents'
import styles from './SingUp.module.css'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router'

const SingUp = () => {
  const navigate = useNavigate()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then(authUser => { navigate('/') })
    .catch((err) => alert(err.message) )
  }
  const register =  (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
    .then(authUser => { navigate('/') })
    .catch((err) => alert(err.message) )
  }
  return (
    <div className={styles.root}>
      <Typography variant='h5' align='center'>Sing In</Typography>
      <form action="" className={styles.form}>
        <NetflixInput border={'border'} type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className={styles.email}/>
        <NetflixInput border={'border'} type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className={styles.password}/>
        <NetflixButton medium type='submit' onClick={signIn}>
          Sing In
        </NetflixButton>
        <Typography variant='subtitle2'>
          New to Netflix?{` `}
          <span className={styles.singUpLink} onClick={register}>Sing Up now. {` `}</span>
        </Typography>
      </form>
    </div>
  )
}

export default SingUp