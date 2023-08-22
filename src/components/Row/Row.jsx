import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import styles from './Row.module.css'
import instance from '../../axios'

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        const fetchData = async () => {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])
    return (
        <div className={styles.root}>
            <Typography style={{fontFamily:'Georgia, Times New Roman, Times, serif'}} variant='h4'>{title}</Typography>
            <div className={styles.posters}>
                {
                    movies.map((movie) =>
                        (movie.poster_path && movie.backdrop_path ) && 
                        <img className={`${styles.poster} ${isLargeRow && styles.posterLarge}`} 
                        key={movie.id} 
                        src={`${base_url}${isLargeRow? movie.poster_path : movie?.backdrop_path}`}
                        alt={movie?.name}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Row