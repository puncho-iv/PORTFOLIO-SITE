import React from 'react'
import About from './components/about/about'
import Contacts from './components/contacts/contacts'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Experience from './components/experience/experience'
import Nav from './components/nav/nav'
import Portfolio  from './components/portfolio/portfolio'
import Services from './components/services/services'

const App = () => {
  return (
   <>      
        <Header />
        <Nav />
        <About /> 
        <Experience />            
        <Services />
        <Portfolio />  
        <Contacts />
        <Footer />
   </>
  )
}

export default App