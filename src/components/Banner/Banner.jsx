import React, { useEffect, useState } from 'react'
import styles from './Banner.module.css'
import { Button, Typography } from '@mui/material'
import instance from '../../axios'
import requests from '../../Request'
const Banner = () => {
    const [movie, setMovie] = useState([])
    const truncate = (string, n) => string?.length > n ? `${string.substr( 0 , n-1)} ...`: string
    const button = {
        width: '100px',
        height: '40px',
        cursor: 'pointer',
        color: '#fff',
        fontWeight: 700,
        fontSize: '0.7rem',
        borderRadius: "5px",
        marginRight: '1rem',
        backgroundColor:"rgba(51,51,51,0.5)",
        '&:hover': {
            backgroundColor: 'white',
            color:'black'
          },
    }
    useEffect(() => {
            const fetchData = async () => {
                const request = await instance.get(requests.netflixOriginals)
                setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
                return request
            }
            fetchData()
    },[])
    return (
        <div className={styles.root} 
            style={{
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                position: 'relative',
                height: '600px',
                objectFit: 'contain',
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                color: '#fff'
            }}
        >
            <div className={styles.info}>
                <Typography variant='h2' component="h1">
                    {movie?.title || movie?.name || movie?.original_name}
                </Typography>
                <div>
                    <Button sx={button}
                    className={styles.button}>
                        PLAY
                    </Button>
                    <Button sx={button} className={styles.button}>
                        MY LIST
                    </Button>
                </div>
                <Typography style={{wordWrap:"break-word"}} variant='h6'>
                    {
                        truncate(
                            movie?.overview,
                            150
                        )
                    }
                </Typography>
            </div>
            <div className={styles.fadeButtonBanner}/>
        </div>
    )
}

export default Banner