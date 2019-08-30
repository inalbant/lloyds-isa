import React, { useState } from 'react'
import styled from 'styled-components'
import SelectedFundsContext from '../../SelectedFundsContext'

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  border: 1px solid;

  h1 {
    text-align: center;
    margin: 2em 0;
  }

  form {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      width: 45%;

      label {
        font-size: 1.2rem;
        margin-bottom: 0.7em;
        color: #414141;
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
      }
      
      section {
        align-items: center;
      }
      span {
        font-size: 2rem;
        font-weight: 600;
        margin-right: 0.5em;
      }
    }
  }

`

const Investment = () => {
  const [upfront, setUpfront] = useState()
  const [monthly, setMonthly] = useState()

  const upFrontChange = e => {
    setUpfront(e.target.value)
  }

  const monthlyChange = e => {
    setMonthly(e.target.value)
  }

  return (
    <Container>
      <h1>How much would you like to invest?</h1>
      <form>
        <div>
          <label htmlFor="up-front" >Up front investment</label>
          <section>
            <span>£</span><input type="number" min="0" step="1" id="up-front" value={upfront} onChange={upFrontChange} />
          </section>
          <p>Set an amount you are happy to contribute to your ISA immediately.</p>
        </div>
        <div>
          <label htmlFor="monthly" >Monthly investment</label>
          <section>
            <span>£</span><input type="number" min="0" step="1" id="monthly" value={monthly} onChange={monthlyChange} />
          </section>
          <p>Set an amount you are happy to contribute to your ISA each month via standing order.</p>
        </div>

      </form>
    </Container>
  )
}

export default Investment
