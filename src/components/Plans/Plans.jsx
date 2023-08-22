import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { NetflixButton } from '../../styled/stiledcomponents'
import styles from './Plans.module.css'
import { useDispatch } from 'react-redux'
import { setPrice } from '../../features/PriceSlice'
import { useNavigate } from 'react-router-dom'

const Plans = ({cost, children, color}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = (cost) => {
        dispatch(setPrice(cost))
        navigate('/checkout')
    }
    return (
        <div className={styles.root}>
            <Typography sx={{
                fontSize:'1.2rem',
                }} variant='h5'>{children}</Typography>
            <NetflixButton color={color} onClick={() => handleClick(cost)}>Subscribe</NetflixButton>
        </div>
    )
}

export default Plans