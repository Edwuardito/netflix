import React from 'react'
import Header from '../../components/Header/Header'
import styles from './Profile.module.css'
import { ThemeProvider, Typography, createTheme } from '@mui/material'
import avatar from "../../images/netflix-profile.jpg"
import Plans from "../../components/Plans/Plans"
import { NetflixButton } from '../../styled/stiledcomponents'
import styled from '@emotion/styled'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router'

const Profile = () => {
  const navigate = useNavigate()
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 800,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  const MyImage = styled.img`
  height: 100px;
  ${({ theme }) => theme.breakpoints.down('md')}{
    display: none;
  }
`;
const signOut = () => {
  auth.signOut()
  navigate("/login")
}
  return (
    <>
      <div className={styles.container}>
        <Header/>
        <div className={styles.root}>
          <Typography variant='h3'> Edit Profile </Typography>
          <div className={styles.info} >
            <ThemeProvider theme={theme}>
              <MyImage src={avatar} alt="profile"/>
            </ThemeProvider>
            <div className={styles.details}>
              <div className={styles.plans}>
                <Typography variant='h6'>email usuario</Typography>
                <Typography variant='h5' className={styles.plansText} gutterBottom> Plans </Typography>
                <Plans cost={7.99}>Netflix Standard</Plans>
                <Plans cost={11.99}>Netflix Basic</Plans>
                <Plans color='gray' cost={15.99}>Netflix Premiun</Plans>
                <NetflixButton wd='fullWidht' onClick={signOut}>Sign Out</NetflixButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Profile