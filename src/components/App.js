import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles.css'
import Header from './header/Header'
import Breadcrumbs from './Breadcrumbs'
import MainContent from './main/MainContent'
import Footer from './footer/Footer'
import BigFooter from './footer/BigFooter';
import Logon from './Logon';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Breadcrumbs />

        <Switch>
          <Route path="/" exact component={Logon} />
          <Route path="/isas" component={MainContent} />
        </Switch>

        <BigFooter />
        <Footer />
      </Router>
    </>
  );
}

export default App
