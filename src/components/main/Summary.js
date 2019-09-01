import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 4em 0 1em 0;
  }

  input {
    width: 1em;
    height: 1em;
  }

  a {
    text-decoration: underline;
    color: blue;
  }
`

const Summary = (props) => {
  return (
    <Container>
      <h1>Summary</h1>
      <h3>Please confirm your ISA investment choices.</h3>

      <div style={{ marginTop: '8em' }}>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">I agree to the <a href="#">terms and conditions.</a></label>
      </div>
    </Container>
  )
}

export default Summary
