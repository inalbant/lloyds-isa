import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
const DisabledFund = styled.div`
  text-align: center;
  color: #ACACAC;
  border: 1px solid;
  padding: 1em 2em;
  border-radius: 3px;

  h4 {
    margin-bottom: 1em;
    font-weight: 700;
  }
`
const EnabledFund = styled.div`
  text-align: center;
  border: 2px solid #006A4D;
  padding: 1em 2em;
  border-radius: 3px;

  h4 {
    margin-bottom: 1em;
    font-weight: 700;
  }
`


const SelectedFunds = ({ funds, upfront, monthly }) => {
  useEffect(() => { }, [funds])

  const roundToTwo = (val) => Number.parseFloat(val).toFixed(2)

  if (funds.length === 9) {
    return (
      <Container>
        <EnabledFund>
          <h4>Conservative</h4>
          <p>Initial investment: <strong>£{roundToTwo(upfront / 3)}</strong></p>
          <p>Monthly investment: <strong>£{roundToTwo(monthly / 3)}</strong></p>
        </EnabledFund>
        <EnabledFund>
          <h4>Conservative</h4>
          <p>Initial investment: <strong>£{roundToTwo(upfront / 3)}</strong></p>
          <p>Monthly investment: <strong>£{roundToTwo(monthly / 3)}</strong></p>
        </EnabledFund>
        <EnabledFund>
          <h4>Conservative</h4>
          <p>Initial investment: <strong>£{roundToTwo(upfront / 3)}</strong></p>
          <p>Monthly investment: <strong>£{roundToTwo(monthly / 3)}</strong></p>
        </EnabledFund>
      </Container>
    )
  } else if (funds.length === 6) {
    if (!funds.includes('con')) {
      return (
        <Container>
          <DisabledFund>
            <h4>Conservative</h4>
            <p>Monthly investment: £0</p>
            <p>Initial investment: £0</p>
          </DisabledFund>
          <EnabledFund>
            <h4>Balanced</h4>
            <p>Initial investment: <strong>£{roundToTwo(upfront / 2)}</strong></p>
            <p>Monthly investment: <strong>£{roundToTwo(monthly / 2)}</strong> </p>
          </EnabledFund>
          <EnabledFund>
            <h4>Aggressive</h4>
            <p>Initial investment: <strong>£{roundToTwo(upfront / 2)}</strong></p>
            <p>Monthly investment: <strong>£{roundToTwo(monthly / 2)}</strong></p>
          </EnabledFund>
        </Container>
      )
    } else if (!funds.includes('bal')) {
      return (
        <Container>
          <EnabledFund>
            <h4>Conservative</h4>
            <p>Monthly investment: <strong>£{roundToTwo(upfront / 2)}</strong></p>
            <p>Initial investment: <strong>£{roundToTwo(monthly / 2)}</strong></p>
          </EnabledFund>
          <DisabledFund>
            <h4>Balanced</h4>
            <p>Initial investment: £0</p>
            <p>Monthly investment: £0 </p>
          </DisabledFund>
          <EnabledFund>
            <h4>Aggressive</h4>
            <p>Initial investment: <strong>£{roundToTwo(upfront / 2)}</strong></p>
            <p>Monthly investment: <strong>£{roundToTwo(monthly / 2)}</strong></p>
          </EnabledFund>
        </Container>
      )
    } else {
      return (
        <Container>
          <EnabledFund>
            <h4>Conservative</h4>
            <p>Monthly investment: <strong>£{roundToTwo(upfront / 2)}</strong></p>
            <p>Initial investment: <strong>£{roundToTwo(monthly / 2)}</strong></p>
          </EnabledFund>
          <EnabledFund>
            <h4>Balanced</h4>
            <p>Initial investment: <strong>£{roundToTwo(upfront / 2)}</strong></p>
            <p>Monthly investment: <strong>£{roundToTwo(monthly / 2)}</strong> </p>
          </EnabledFund>
          <DisabledFund>
            <h4>Aggressive</h4>
            <p>Initial investment: £0</p>
            <p>Monthly investment: £0</p>
          </DisabledFund>
        </Container>
      )
    }
  } else {
    if (funds.includes('con')) {
      return (
        <Container>
          <EnabledFund>
            <h4>Conservative</h4>
            <p>Initial investment: <strong>£{upfront}</strong></p>
            <p>Monthly investment: <strong>£{monthly}</strong></p>
          </EnabledFund>
          <DisabledFund>
            <h4>Balanced</h4>
            <p>Initial investment: £0</p>
            <p>Monthly investment: £0</p>
          </DisabledFund>
          <DisabledFund>
            <h4>Aggressive</h4>
            <p>Initial investment: £0</p>
            <p>Monthly investment: £0</p>
          </DisabledFund>
        </Container>
      )
    } else if (funds.includes('bal')) {
      return (
        <Container>
          <DisabledFund>
            <h4>Conservative</h4>
            <p>Monthly investment: £0</p>
            <p>Initial investment: £0</p>
          </DisabledFund>
          <EnabledFund>
            <h4>Balanced</h4>
            <p>Initial investment: <strong>£{upfront}</strong></p>
            <p>Monthly investment: <strong>£{monthly}</strong></p>
          </EnabledFund>
          <DisabledFund>
            <h4>Aggressive</h4>
            <p>Initial investment: £0</p>
            <p>Monthly investment: £0</p>
          </DisabledFund>
        </Container>
      )
    } else {
      return (
        <Container>
          <DisabledFund>
            <h4>Conservative</h4>
            <p>Monthly investment: £0</p>
            <p>Initial investment: £0</p>
          </DisabledFund>
          <DisabledFund>
            <h4>Balanced</h4>
            <p>Initial investment: £0</p>
            <p>Monthly investment: £0</p>
          </DisabledFund>
          <EnabledFund>
            <h4>Aggressive</h4>
            <p>Initial investment: <strong>£{upfront}</strong></p>
            <p>Monthly investment: <strong>£{monthly}</strong></p>
          </EnabledFund>
        </Container>
      )
    }
  }

}

export default SelectedFunds
