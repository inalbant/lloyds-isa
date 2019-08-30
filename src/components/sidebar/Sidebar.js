import React from 'react'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'
import InfoPage from '../main/InfoPage';

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
`
const Bar = styled.div`
  width: 8px;
  height: 30px;
  background: #2F2F2F;
  margin-left: 3.22em;
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

const Sidebar = () => {
  return (
    <SideContainer>
      <CircleNav>
        <Bar />
        <Router>
          <NavLink to="/info" activeClassName="chosen">
            <Circle />
            <p>ISA Info</p>
          </NavLink>
          <Bar />
          <NavLink to="/" activeClassName="chosen">
            <Circle />
            <p>Eligibility</p>
          </NavLink>
          <Bar />
          <NavLink to="/" activeClassName="chosen">
            <Circle />
            <p>Profile</p>
          </NavLink>
          <Bar />
          <NavLink to="/" activeClassName="chosen">
            <Circle />
            <p>Funds</p>
          </NavLink>
          <Bar />
          <NavLink to="/" activeClassName="chosen">
            <Circle />
            <p>Fund Description</p>
          </NavLink>
          <Bar />
          <NavLink to="/" activeClassName="chosen">
            <Circle />
            <p>Investment Selection</p>
          </NavLink>
          <Bar />
          <NavLink to="/" activeClassName="chosen">
            <Circle />
            <p>Summary</p>
          </NavLink>
          <Bar />
          <NavLink to="/" activeClassName="chosen">
            <Circle />
            <p>Confirmation</p>
          </NavLink>
          <Switch>
            <Route path="/info" component={InfoPage} />
            {/* <Route path="/eligibility" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} /> */}
          </Switch>
        </Router>
        <Bar />
      </CircleNav>
    </SideContainer>
  )
}

export default Sidebar