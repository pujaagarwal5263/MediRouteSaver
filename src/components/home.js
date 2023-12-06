import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Services from './Services'
import Footer from './Footer'

const home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default home