import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SelectedFunds from './SelectedFunds';
import BouncingArrow from '../BouncingArrow';

const Container = styled.div`
  width: 70%;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 2em 0;
  }

  form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7em;

    div {
      display: flex;
      flex-direction: column;
      width: 45%;

      label {
        font-size: 1.2rem;
        margin-bottom: 0.7em;
        color: #414141;
        margin-left: 1.7em;
      }

      input {
        width: 60%;
        height: 3em;
        margin-bottom: 1em;
        font-size: 1.2rem;
        border: 1px solid #82be65;
        border-radius: 5px;
      }

      p {
        color: #82be65;
        font-weight: 600;
      }
      
      section {
        align-items: center;
      }
      span {
        font-size: 2rem;
        font-weight: 600;
        margin-right: 0.4em;
      }
    }
  }
`


const Investment = (props) => {
  const [upfront, setUpfront] = useState(0)
  const [monthly, setMonthly] = useState(0)
  const [selectedFunds, setSelectedFunds] = useState('')

  const upFrontChange = e => {
    setUpfront(e.target.value)
  }

  const monthlyChange = e => {
    setMonthly(e.target.value)
  }

  useEffect(() => {
    const { funds } = props.match.params
    setSelectedFunds(funds)
  }, [props.match.params])

  return (
    <Container>
      <h1>How much would you like to invest?</h1>
      <form>
        <div>
          <label htmlFor="up-front" >Up front investment</label>
          <section>
            <span>£</span><input type="number" min="0" step="1" id="up-front" onChange={upFrontChange} />
          </section>
          <p>Set an amount you are happy to contribute to your ISA immediately.</p>
        </div>
        <div>
          <label htmlFor="monthly" >Monthly investment</label>
          <section>
            <span>£</span><input type="number" min="0" step="1" id="monthly" onChange={monthlyChange} />
          </section>
          <p>Set an amount you are happy to contribute to your ISA each month via standing order.</p>
        </div>
      </form>
      {selectedFunds ? <SelectedFunds funds={selectedFunds} upfront={upfront} monthly={monthly} /> :
        <h2>No funds selected.</h2>}
      {selectedFunds && <Link to={`/isa/summary/`}> <BouncingArrow /> </Link>}
    </Container>

  )
}

export default Investment
