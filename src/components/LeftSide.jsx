// import { useState } from 'react'
import styled from 'styled-components'
import backgroundImage from './elements/bible.jpg'
import Logo from './elements/logo.png'
import Box from './custom/Box'
import { media, minMedia } from './../theme'
import PropTypes from 'prop-types'



function LeftSide(props) {
  const {
    cardPaymentHandler,
    ussdPaymentHandler,
    bankPaymentHandler,
    textPaymentHandler,
    transferPaymentHandler,
    supportHandler,
    reportHandler,
    updateHandler,
  } = props

  const { closePage } = props


  return (
    <div>
      {/* <div>
        <Container>
          <header>
            <div>
              <p>BANK TRANSFER</p>
            </div>
            <div>
              <button onClick={closePage}>
                Close <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </header>
          <div>
            <hr style={{ width: '100%' }} />

            <label htmlFor='ussd'>
              Select from the option below to view details
            </label>
            <br />
            <select id='ussd'>
              <option disabled selected>
                Select ussd type
              </option>
              <option value='0'>
                Kingdom Care Covenant (Humanitarian Service)
              </option>
              <option value='1'>Shiloh Sacrifice</option>
              <option value='2'>Offering</option>
              <option value='3'>Tithe</option>
              <option value='4'>Mission Adoption Scheme</option>
              <option value='5'>The Ark Project</option>
              <option value='6'>Rural Church Building Project</option>
            </select>
          </div>
        </Container>
      </div> */}

      <Box width='100%'>
     
        <Container>
          <div>
            <Div>
              <div>
                <img src={Logo} width={'60px'} alt='logo' />
              </div>
              <div>
                <h1>
                  <span>
                    LIVING FAITH CHURCH
                    <br />
                    WORLDWIDE <br /> INTERNATIONAL
                  </span>
                </h1>
              </div>
            </Div>

            <div>
              {' '}
              <h1>
                Winners Online <br />
                Giving Platform
              </h1>
            </div>
          </div>
          <h3>GIVING OPTIONS</h3>

          <div>
            <h3>GENERAL</h3>
            <Divs>
              <button onClick={cardPaymentHandler}>CARD PAYMENT</button>
              <button onClick={ussdPaymentHandler}>USSD</button>
              <button onClick={bankPaymentHandler}>BANK TRANSFER</button>
            </Divs>

            <h3>FOREX SPECIFICS</h3>
            <Divs>
              <button onClick={textPaymentHandler}>TEXT TO GIVE</button>
              <button onClick={transferPaymentHandler}>Bank Transfer</button>
            </Divs>

            <h3>SUPPORT AND INFORMATION</h3>
            <Divs>
              <button onClick={supportHandler}>SUPPORT</button>
              <button onClick={reportHandler}>GET REPORT</button>
              <button onClick={updateHandler}>UPDATES</button>
            </Divs>
          </div>
        </Container>
      </Box>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: inherit;
  height: 100vh;
  padding: 10rem 2.5rem 10rem 8rem;

  ${media.md`
    max-width: 100%;
    padding: 2rem 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  `}
  ${minMedia.md`
    max-width: 100%;
    padding: 2rem 0;
    height: 93vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  `}

  button {
    font-family: 'Poppins', sans-serif;
    transition: 0.05s;
    cursor: pointer;
    color: white;
    border: 2px solid #fff;
    border-radius: 7px;
    font-size: 18px;
    margin: 0 5px;
    background: none;
    font-weight: 700;
    margin-bottom: 15px;
    overflow: hidden;
    padding: 7px 10px;
    width: 40%;

    ${media.sm`
    display: block;
    width: 100%;
    padding: 7px 50px;
  `}
    ${minMedia.md`
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 7px 12rem;
  `}
  }
  button:hover {
    color: black;
    background-color: white;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 18px;

    ${media.sm`
    font-size: 14px;

  `}
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 15px;
  }
`

const Div = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: nowrap;

  ${media.sm`
    display: flex;
    flex-direction: column;
    align-items: center;

  `}
`
const Divs = styled.div``


export default LeftSide

LeftSide.propTypes = {
  cardPaymentHandler: PropTypes.func,
  ussdPaymentHandler: PropTypes.func,
  bankPaymentHandler: PropTypes.func,
  textPaymentHandler: PropTypes.func,
  transferPaymentHandler: PropTypes.func,
  supportHandler: PropTypes.func,
  reportHandler: PropTypes.func,
  updateHandler: PropTypes.func,
}
