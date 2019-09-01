import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import consDis from '../../assets/conservative-disabled.png'
import balDis from '../../assets/balanced-disabled.png'
import aggDis from '../../assets/aggressive-disabled.png'
import graph from '../../assets/graph.png'
import consEn from '../../assets/conservative-enabled.png'
import balEn from '../../assets/balanced-enabled.png'
import aggEn from '../../assets/aggressive-enabled.png'
import BouncingArrow from '../BouncingArrow';

const Container = styled.div`
  width: 100%;
  padding-left: 2em;

  h1 {
    text-align: center;
    margin: 1em 0;
  }
`
const Images = styled.div`
  display: flex;
  justify-content: space-between;
`
const ImgContainer = styled.div`
  width: 250px;
  cursor: pointer;
  &:hover {
    border: 2px solid #2F815B;
    border-radius: 3px;
  }
`


const FundSelection = () => {

  const [cons, setCons] = useState(false)
  const [bal, setBal] = useState(false)
  const [agg, setAgg] = useState(false)

  const handleClickCon = () => {
    const imgEl = document.getElementById('con')
    imgEl.src = cons ? consDis : consEn
    setCons(!cons)
  }

  const handleClickBal = () => {
    const imgEl = document.getElementById('bal')
    imgEl.src = bal ? balDis : balEn
    setBal(!bal)
  }

  const handleClickAgg = () => {
    const imgEl = document.getElementById('agg')
    imgEl.src = agg ? aggDis : aggEn
    setAgg(!agg)
  }

  const chosenFunds = () => {
    let str = ''
    if (cons) {
      str = str.concat('con')
    }
    if (bal) {
      str = str.concat('bal')
    }
    if (agg) {
      str = str.concat('agg')
    }
    return str
  }

  return (
    <Container>
      <h1>Select the right fund for you</h1>
      <Images>
        <ImgContainer onClick={handleClickCon}>
          <img src={consDis} alt="conservative-disabled" id='con' />
        </ImgContainer>
        <ImgContainer onClick={handleClickBal} >
          <img src={balDis} alt="balanced-disabled" id='bal' />
        </ImgContainer>
        <ImgContainer onClick={handleClickAgg} >
          <img src={aggDis} alt="aggressive-disabled" id='agg' />
        </ImgContainer>
      </Images>
      <img src={graph} alt="graph" style={{ marginTop: '3em' }} />
      <Link to={`/isa/investment/chosenfunds/${chosenFunds()}`} >
        <BouncingArrow />
      </Link>
    </Container>
  )
}

export default FundSelection
