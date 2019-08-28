import React from 'react'
//import styled from 'styled-components'
import './styles.css'
import Header from './header/Header'
import Breadcrumbs from './Breadcrumbs'
import MainContent from './main/MainContent'
import Footer from './footer/Footer'
import BigFooter from './footer/BigFooter';


function App() {
  return (
    <div className="pageWrapper">
      <div className="contentsWrapper">
        <Header />
        <Breadcrumbs />
        <MainContent />
        <BigFooter />
        <Footer />
      </div>
    </div>
  );
}

export default App
