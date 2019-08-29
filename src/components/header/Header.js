import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/lloyds-logo.png'

const TopBit = styled.div`
  color: #fff;
  /* background: rgb(0, 64, 46); */
  background: #024731;
`
const NavSection = styled.div`
  width: 35%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 0.85rem;
    font-weight: 300;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
const LogoNav = styled.div`
  color: #fff;
  background: #006A4D;
  height: 101px;
  display: flex;
  align-items: center;
`

const LogoNavContainer = styled.div`
  width: 1136px;
  margin: 0 auto;
  padding: 0 2em;
  display: flex;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
`

const RightNav = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  justify-content: flex-end;

  i {
    margin-right: 0.85em;
    padding-left: 0.5em;
    cursor: pointer;
  }

  p {
    padding-right: 0.85em;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
const AccountDiv = styled.div`
  background: #024731;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 35%;
  cursor: pointer;
`

const ChevronIcon = styled.div``

const Container = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 2em;
`

const BottomBit = styled.div`
  color: #fff;
  background: #2F815B;
`

const BottomContainer = styled.div`
  height: 53px;
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 2em;
  display: flex;
  align-items: center;

  i {
    margin-right: 2em;
    cursor: pointer;
  }

  p {
    margin-right: 1em;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Header = (props) => {
  return (
    <>
      <TopBit>
        <Container>
          <NavSection>
            <p style={{ fontWeight: '600' }}>Personal</p>
            <p>Business</p>
            <p>Private Banking</p>
            <p>International Banking</p>
          </NavSection>
        </Container>
      </TopBit>
      <LogoNav>
        <LogoNavContainer>
          <img src={logo} alt="logo" onClick={() => console.log(props)} />
          <RightNav>
            <i className="fas fa-phone-alt fa-lg"></i>
            <p style={{ borderRight: "0.02em solid" }}>Contact Us</p>
            <i className="fas fa-map-marker-alt fa-lg"></i>
            <p>Branch Finder</p>
            <AccountDiv>
              <i className="fas fa-user fa-lg"></i>
              <p>Test Name</p>
              <ChevronIcon>
                <i className="fas fa-chevron-down"></i>
              </ChevronIcon>
            </AccountDiv>
          </RightNav>
        </LogoNavContainer>
      </LogoNav>
      <BottomBit>
        <BottomContainer>
          <i className="fas fa-home fa-lg"></i>
          <p>Products and services</p>
          <i className="fas fa-chevron-down"></i>
          <p>Help and support</p>
          <i className="fas fa-chevron-down"></i>
          <p>Banking with us</p>
          <i className="fas fa-chevron-down"></i>
          <p>Banking online</p>
          <i className="fas fa-chevron-down"></i>
        </BottomContainer>
      </BottomBit>
    </>
  )
}

export default Header
