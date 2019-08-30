import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import infoimg from '../../assets/isa_info.png'
import Bouncingarrow from '../BouncingArrow';

const Container = styled.div`
  height: 70%;
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Img = styled.div`
  height: 50%;
  max-width: 70%;
  margin-bottom: 2em;
`

const InfoPage = () => {
  return (
    <Container>
      <Img>
        <img src={infoimg} alt="info" />
        <Link to="/isa/fundsselection">
          <Bouncingarrow />
        </Link>

      </Img>



    </Container>
  )
}

export default InfoPage
