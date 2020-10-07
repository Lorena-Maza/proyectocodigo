import React from 'react'
import Navigation from "../components/Navigation";
import Home from '../components/Home';
import Footer from '../components/Footer';

export default function HomeViewome() {
  return (
    
      <div className="container-fluid">
        <Navigation />
        
        <Home/>   
        <Footer />   
     </div>

  
  )
}

