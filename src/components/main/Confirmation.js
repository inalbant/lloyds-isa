import React from 'react'
import styled from 'styled-components'
import tickImage from '../../assets/tick.png'
import postBox from '../../assets/postbox.png'

const Container = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  margin: 15em auto;
  margin-left: 7em;
  justify-content: space-between;
`
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  img {
    margin-bottom: 3em;
  }

  
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  
`


const Confirmation = () => {
  return (
    <Container>
      <LeftSide>
        <img src={tickImage} alt="tick" />
        <p><strong>Your ISA application has been received and accepted.</strong></p>
        <p>Account Name: Fake Name</p>
        <p>Account Number: XXXXXXXX</p>
        <p>Sort Code: XX-XX-XX</p>
        <button>Go Home</button>
      </LeftSide>
      <RightSide>
        <img src={postBox} alt="ggd" />
        <p>Check your email for details about your new ISA account with steps for what to do next.</p>
        <p ><strong>If you do not receive your email within the next 10 minutes, please ocntact support.</strong></p>

      </RightSide>
    </Container>
  )
}

export default Confirmation
