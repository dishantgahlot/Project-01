
import React from 'react'
import Navbar from './components/Navbar'
import TopBar from './components/secondary'
import HeroSection from './components/slider'
import BackgroundSlider from './components/slider'
import ProductGrid from './components/background'
import HorizontalSection from './components/horizontalSlider'
import ProductGrid2 from './components/withiuz'
import Footer from './components/footer'

const App = () => {
  return (

    <>

    <Navbar/>
    <TopBar/>

     
    <div className="space-y-20 bg-gray-100">

      
      <HeroSection/>
      <ProductGrid2/>

      <HorizontalSection/>
     <ProductGrid2/>
      <HorizontalSection/>
      

      <HorizontalSection/>

      <Footer/>

    </div>
    
    </>
    
  )
}

export default App