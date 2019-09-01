import React from 'react'
import { Route, NavLink, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import InfoPage from './InfoPage';
import FundSelection from './FundSelection';
import Investment from './Investment';
import Summary from './Summary';
import Logon from '../Logon'

const MainContainer = styled.div`
  height: 67vh;
  display: flex;
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 2em 0 0;
  background: #E9E9E9;
  background: #fff;
`
const SideContainer = styled.div`
  width: 23%;
  background: #eef4e6;
`
const CircleNav = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    padding-left: 2em;

    p {
      font-weight: 600;
      font-size: 1.1rem;

      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .chosen {
    color: #006A4D;
    text-decoration: underline;

    Circle {
      background: #006A4D;
    }
  }
`
const Bar = styled.div`
  width: 8px;
  height: 30px;
  background: #2F2F2F;
  margin-left: 3.22em;

  &:first-child,
  :last-child {
    height: 92px;
  }
`
const Circle = styled.div`
  color: #006A4D;
  width: 40px;
  height: 40px;
  background: #BBBBBB;
  border-radius: 50%;
  border: 3px solid;
  flex-shrink: 0;
  margin-right: 1em;
`

const MainContent = () => {
  return (
    <MainContainer>
      <Router>
        <SideContainer>
          <CircleNav>
            <Bar />
            <NavLink to="/isa/info" activeClassName="chosen">
              <Circle />
              <p>Start Investing</p>
            </NavLink>
            <Bar />
            <NavLink to="/dsd" activeClassName="chosen">
              <Circle />
              <p>Declaration</p>
            </NavLink>
            <Bar />
            <NavLink to="/dsdsd" activeClassName="chosen">
              <Circle />
              <p>Profile Details</p>
            </NavLink>
            <Bar />
            <NavLink to="/isa/fundsselection" activeClassName="chosen">
              <Circle />
              <p>Fund Selection</p>
            </NavLink>
            <Bar />
            <NavLink to="/isa/investment" activeClassName="chosen">
              <Circle />
              <p>Investment Selection</p>
            </NavLink>
            <Bar />
            <NavLink to="/isa/summary" activeClassName="chosen">
              <Circle />
              <p>Summary</p>
            </NavLink>
            <Bar />
            <NavLink to="/isa/confirmation" activeClassName="chosen">
              <Circle />
              <p>Confirmation</p>
            </NavLink>
            <Bar />
          </CircleNav>
        </SideContainer>
        {/* <InfoPage /> */}
        <Switch>
          <Route path="/" exact component={Logon} />
          <Route path="/isa/info" component={InfoPage} />
          <Route path="/isa/fundsselection" component={FundSelection} />
          <Route path="/isa/investment/chosenfunds/:funds" component={Investment} />
          <Route path="/isa/investment/chosenfunds" component={Investment} />
          <Route path="/isa/summary/:chosenisas" component={Summary} />
          <Route path="/isa/summary" component={Summary} />
          <Redirect from="/isa" exact to="/isa/info" />
        </Switch>
      </Router>
    </MainContainer>
  )
}

export default MainContent
