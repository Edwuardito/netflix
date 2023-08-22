import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import styles from './Home.module.css'
import Row from '../../components/Row/Row'
import requests from '../../Request'

const Home = () => {

  return (
    <div className={styles.home}>
      <Header/>
      <Banner/>
      <Row title={'NETFLIX ORIGINALS'}  fetchUrl={`${requests.netflixOriginals}`} isLargeRow/>
      <Row title={'TOP RATED'}  fetchUrl={requests.topRated}/>
      <Row title={'ACTION MOVIES'}  fetchUrl={requests.actionMovies}/>
      <Row title={'COMEDY MOVIES'}  fetchUrl={requests.comedyMovies}/>
      <Row title={'HORROR MOVIES'}  fetchUrl={requests.horrorMovies}/>
      <Row title={'ROMANCE MOVIES'}  fetchUrl={requests.romanceMovies}/>
      <Row title={'DOCUMENTARIES'}  fetchUrl={requests.documentaries}/>
    </div>
  )
}

export default Home

