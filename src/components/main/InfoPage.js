import React from 'react'
import styled from 'styled-components'
import infoimg from '../../assets/isa_info.png'

const Container = styled.div`
  height: 70%;
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled.div`
  height: 50%;
  max-width: 70%;
`

const InfoPage = () => {
  return (
    <Container>
      <Img>
        <img src={infoimg} alt="info" />
      </Img>

    </Container>
  )
}

export default InfoPage
