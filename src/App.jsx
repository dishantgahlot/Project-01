
import React from 'react'
import Navbar from './components/Navbar'
import TopBar from './components/secondary'
import HeroSection from './components/slider'
import BackgroundSlider from './components/slider'
import ProductGrid from './components/background'
import HorizontalSection from './components/horizontalSlider'
import ProductGrid2 from './components/productgrid2'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar/>
      <TopBar/>
      <HeroSection/>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 py-6 space-y-8">

        <div className="bg-white m-5 p-4 rounded shadow-sm">
          <ProductGrid2/>
        </div>

        <div className="bg-white m-5 p-4 rounded shadow-sm">
          <HorizontalSection/>
        </div>

        <div className="px-5">
          <ProductGrid2/>
        </div>

        <div className="px-5">
          <HorizontalSection/>
        </div>

        <div className="px-5">
          <ProductGrid2/>
        </div>

        <div className="px-5">
          <HorizontalSection/>
        </div>

      </div>

      {/* Footer ALWAYS at bottom */}
      <Footer/>

    </div>
  )
}
  

  


export default App