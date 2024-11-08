import { useState } from 'react'
import styled from 'styled-components';
import backgroundImage from './elements/bible.jpg';
import Logo from './elements/logo.png';
import Box from './custom/Box'


function LeftSide(props){

const {cardPaymentHandler, ussdPaymentHandler, bankPaymentHandler} = props

    return (
    <>
    <Box width='100%'>
        <Container>
           <Div>
            <div>
                <img src={Logo} width={'80px'}/>
            </div> 
            <div>
                <h1><span>LIVING FAITH CHURCH<br />WORLDWIDE <br /> INTERNATIONAL</span></h1>
            </div>
           </Div>

            <div> <h1>Winners Online <br />Giving Platform</h1></div>

        <h3>GIVING OPTIONS</h3>
        <div><button onClick={cardPaymentHandler} >CARD PAYMENT</button>
        <button onClick={ussdPaymentHandler} >USSD</button> <br /> 
        <button onClick={bankPaymentHandler}>BANK TRANSFER</button>
        </div>

        <h3>FOREX SPECIFICS</h3>
        <div><button>TEXT TO GIVE</button><button>Bank Transfer</button></div>

        <h3>SUPPORT AND INFORMATION</h3>
        <div><button>SUPPORT</button><button>GET REPORT</button> <br /> <button>UPDATES</button></div>

        

        </Container>
        </Box>
    </>
    );
};














const Container = styled.div` 
	display:inline-block;
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    padding: 5rem 1rem;

button {
	font-family: "Poppins", sans-serif;
  	border: solid 1px #fff;
    border-radius: 7px;
    font-size: 16px;
    margin: 0 5px 15px 0;
    width: 10em;
    background: none;
    font-weight: 700;
    margin-bottom: 15px;
    height: 42px;
    overflow: hidden;
    transition: 0.25s;
    cursor: pointer;
    color:white;
}
button:hover {
  color: black;
  background-color: white;
}

h3{
	margin-bottom: -0.2px;
	font-size: 10px;
}

h1{
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 15px;
}

`;


const Div = styled.div` 
    display:flex;
    gap: 1rem;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
}
`

export default LeftSide;