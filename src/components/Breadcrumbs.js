import React from 'react'
import styled from 'styled-components'

const Crumbs = styled.div`
  background: #fff;
  color: #434343;
`
const CrumbsContainer = styled.div`
  height: 41px;
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 2em;
  display: flex;
  align-items: center;

  p,i {
    margin-right: 1em;
  }

  p {
    cursor: pointer;
  }
`

function Breadcrumbs() {
  return (
    <Crumbs>
      <CrumbsContainer>
        <p>Home</p>
        <i className="fas fa-chevron-right fa-xs"></i>
        <p>ISAs</p>
      </CrumbsContainer>
    </Crumbs>
  )
}

export default Breadcrumbs
