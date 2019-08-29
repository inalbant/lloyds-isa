import React from 'react'
import styled from 'styled-components'
import Sidebar from '../sidebar/Sidebar';
import InfoPage from './InfoPage';

const MainContainer = styled.div`
  height: 61vh;
  display: flex;
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 2em 0 0;
  background: #E9E9E9;
`

function MainContent() {
  return (
    <MainContainer>
      <Sidebar />
      <InfoPage />
    </MainContainer>
  )
}

export default MainContent
