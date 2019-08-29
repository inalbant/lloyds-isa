import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import image from '../assets/macbookguy.jpg'
import axios from 'axios';

const Container = styled.div`
  /* max-width: 60%; */
  height: 60vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserImage = styled.div`
  color: #006a4d;
  margin: 0 5em;
  max-width: 400px; 
`

const FormDiv = styled.div`
  border-left: 1px solid;
  padding: 0 5em;
  width: 40%;
  h1 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1em;
  }

  form {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
  }

  input {
    border: 1px solid;
    border-radius: 5px;
    height: 2.5em;
    width: 20em;
    margin-left: 1em;
  }

  div {
    margin-bottom: 1em;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    padding: 1em;
    width: 10em;
    color: #fff;
    background: #006a4d;

    &:hover {
      background: #649c00;
    }
  }

  p {
    margin-top: 1em;
  }

  strong {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`


const Logon = (props) => {
  const [username, setUsername] = useState('')

  const handleChange = event => {
    setUsername(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.history.push('/isas')
  }

  useEffect(() => {
    axios
      .get('http://10.216.1.214:8080/getUserDtls/oli123')
      .then(response => console.log(response.data))
    console.log('comp mounted')
  }, [])

  return (
    <Container>
      <UserImage>
        {/* <i className="fas fa-user fa-9x"></i> */}
        <img src={image} alt="macbookguy" />
      </UserImage>
      <FormDiv>
        <h1>Log on</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p>Not a LLoyds customer? <strong>Register now!</strong></p>
      </FormDiv>
    </Container>
  )
}

export default Logon
