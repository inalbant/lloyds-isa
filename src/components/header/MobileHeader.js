import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  height: 75px;
  background-color: #006a4d;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.img`
  width: 42px;
  height: 42px;
`

const HeaderSideCont = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 450px) {
    .contact {
      display: none;
    }
  }
`

const HeaderSideEl = styled.div`
  color: #fff;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #fff;
  cursor: pointer;
  i {
    margin-bottom: 5px;
  }
`
const HeaderMenu = styled.div`
  color: #fff;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  i {
    margin-bottom: 5px;
  }
`

const BottomOfHeader = styled.div`
  height: 40px;
  color: #7d7d7d; 
  padding: 12px 16px;
  a {
    font-weight: 700;
  }
`
//Pr0perty!


const MobileHeader = () => {
  return (
    <>
      <HeaderContainer>
        <Logo src="https://www.lloydsbank.com/assets/img/personal/lloyds_personal_banking_logo_m.png" />
        <HeaderSideCont id="header-side-cont">
          <HeaderSideEl className="contact">
            <i class="fas fa-phone"></i>
            <p>Contact Us</p>
          </HeaderSideEl>
          <HeaderSideEl>
            <i class="fas fa-map-marker-alt"></i>
            <p>Branch Finder</p>
          </HeaderSideEl>
          <HeaderSideEl>
            <i class="fas fa-unlock-alt"></i>
            <p>Log on</p>
          </HeaderSideEl>
          <HeaderMenu>
            <i class="fas fa-bars"></i>
            <p>Menu</p>
          </HeaderMenu>
          {/* <BurgerMenu pageWrapId={"app"} outerContainerId={"header-side-cont"} /> */}
        </HeaderSideCont>
      </HeaderContainer>
      <BottomOfHeader>
        <a href="*">Home</a>
        <span style={{ margin: "0 0.5em" }}>></span>
        <a href="*">ISAs</a>
      </BottomOfHeader>
      hdhdsssssss
    </>
  )
}

export default MobileHeader
