import React from 'react'

// Components
import HeroSlider from '../components/HeroSlider'
import Transportes from '../components/Transportes'
import Header from "../components/Header";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
    <Header/>
    <HeroSlider/>
    <Transportes/>
    <Footer/>
    </>
  )
}

export default Home