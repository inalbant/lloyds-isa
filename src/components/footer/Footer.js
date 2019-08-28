import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
  color: #fff;
  background: #024731;
`
const FootContainer = styled.div`
  height: 78px;
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LeftDiv = styled.div`
  display: flex;

  P {
    font-weight: 300;
    font-size: 0.85rem;
    margin-right: 1em;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
const RightDiv = styled.div`
  display: flex;

  p {
    font-weight: 300;
    font-size: 0.85rem;
    margin-left: 0.75em;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  i {
    margin-left: 1em;
    cursor: pointer;
  }
`

const Footer = () => {
  return (
    <Foot>
      <FootContainer>
        <LeftDiv>
          <p>Legal</p>
          <p>Privacy</p>
          <p>Terms and conditions</p>
          <p>Cookies</p>
          <p>Accessibility and disability</p>
          <p>Sitemap</p>
        </LeftDiv>
        <RightDiv>
          <i className="fab fa-facebook-f"></i>
          <p>facebook</p>
          <i className="fab fa-twitter"></i>
          <p>twitter</p>
          <i className="fab fa-youtube"></i>
          <p>youtube</p>
        </RightDiv>
      </FootContainer>
    </Foot>
  )
}

export default Footer
