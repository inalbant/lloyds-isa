import React from 'react'
import styled from 'styled-components'

const BigFoot = styled.div`
  color: #fff;
  background: #006A4D;
  height: 329px;
  font-weight: 300;
  font-size: 0.85rem; 
`

const BigFootCtnr = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 2em;
  display: flex;
  height: 100%;
  justify-content: space-between;
`

const Contact = styled.div`
  h3 {
    font-weight: 700;
    margin: 1em 0;
  }
`
const ContactCtnr = styled.div`
  width: 40%;
`

const ContactIcon = styled.div`
  margin: 0 1em;
`

const ContactNum = styled.div`
  width: 40%;

  p:first-child { 
    font-size: 1.2rem;
    margin-bottom: 0.6em;
  }

  p {
    font-weight: 300;
    font-size: 0.85rem; 
  }
`
const ContactDiv = styled.div`
  display: flex;
`

const ContactRight = styled.div`
  i {
    margin: 0 1em;
  }
  div {
    margin-bottom: 1em;
  }
  p {
    font-weight: 300;
    font-size: 0.85rem; 
    display: inline;
  }
  display: flex;
  flex-direction: column;
  width: 40%;
`
const Banking = styled.div`
  padding: 0 1em;

  h3 {
    font-weight: 700;
    margin: 1em 0;
  }

  p {
    margin-bottom: 0.7em;
  }
`

const About = styled.div`
  padding: 0 1em;

  h3 {
    font-weight: 700;
    margin: 1em 0;
  }

  p {
    margin-bottom: 0.7em;
  }
`

const Products = styled.div`
  padding: 0 1em;

  h3 {
    font-weight: 700;
    margin: 1em 0;
  }

  p {
    margin-bottom: 0.7em;
  }
`

const BigFooter = () => {
  return (
    <BigFoot>
      <BigFootCtnr>
        <ContactCtnr>
          <Contact>
            <h3>Contact us</h3>
          </Contact>
          <ContactDiv>
            <ContactIcon>
              <i className="fas fa-phone-alt"></i>
            </ContactIcon>
            <ContactNum>
              <p>0345 300 0000</p>
              <p>If you need to call us from abroad, you can call us on <strong>0173 334 7007</strong>. Not all Telephone Banking services are available 24 hours a day, seven days a week. Please speak to an adviser for more information. Calls may be monitored or recorded.</p>
            </ContactNum>
            <ContactRight>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <p>Find a branch</p>
              </div>
              <div>
                <i className="fab fa-twitter"></i>
                <p>@AskLloydsBank</p>
              </div>
              <div>
                <i className="fas fa-comments"></i>
                <p>Ask a question</p>
              </div>
            </ContactRight>
          </ContactDiv>
        </ContactCtnr>

        <Banking>
          <h3>Banking with us</h3>
          <p>Internet Banking</p>
          <p>Mobile Banking</p>
          <p>Security</p>
          <p>Rates and Charges</p>
          <p>Glossary</p>
          <p>Service Availability</p>
        </Banking>

        <About>
          <h3>About us</h3>
          <p>About Lloyds Bank</p>
          <p>Communities</p>
          <p>Lloyds Banking Group</p>
          <p>Careers</p>
          <p>Press releases</p>
        </About>

        <Products>
          <h3>Products and services</h3>
          <p>Current accounts</p>
          <p>Credit cards</p>
          <p>Savings</p>
          <p>Investments</p>
          <p>Mortgages</p>
          <p>Loans</p>
          <p>Car finance</p>
          <p>Insurance</p>
          <p>Travel services</p>
          <p>Private Banking</p>
        </Products>

      </BigFootCtnr>
    </BigFoot>
  )
}

export default BigFooter
