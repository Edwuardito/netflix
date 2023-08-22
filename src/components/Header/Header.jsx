import { AppBar, Toolbar, Avatar } from '@mui/material'
import logo from "../../images/Logo-Netflix.png"
import styles from "./styles.module.css"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const [ show, setShow ] = useState(false)

    const hideHeader = () => {
        if(window.scrollY > 10){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",hideHeader)
        return () =>  window.removeEventListener("scroll", hideHeader)
    },[])
    
    return (
        <AppBar sx={{
            backgroundColor: show ? 'transparent' : '#111',
            position: 'sticky',
            top:0,
            left: 0 ,
            right:0,
            transition: '0.3s ease',
            boxShadow:'none'
        }}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to='/'>
                    <img src={logo} alt='logo' className={styles.logo}/>
                </Link>
                <Link to='/profile'>
                    <Avatar variant='square' className={styles.avatar}/>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
  
export default Header