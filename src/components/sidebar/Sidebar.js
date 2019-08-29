import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  background: #eef4e6;
`
const CircleNav = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Bar = styled.div`
  width: 8px;
  height: 30px;
  background: #2F2F2F;
`

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background: #649c00;
  border-radius: 50%;
  border: 3px solid;
`

const Sidebar = () => {
  return (
    <Container>
      <CircleNav>
        <Bar />
        <Circle />
        <Bar />
        <Circle />
        <Bar />
        <Circle />
        <Bar />
        <Circle />
        <Bar />
        <Circle />
        <Bar />
        <Circle />
        <Bar />
        <Circle />
        <Bar />
        <Circle />
        <Bar />
      </CircleNav>
    </Container>
  )
}

export default Sidebar
