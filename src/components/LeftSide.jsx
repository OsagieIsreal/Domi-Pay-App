import { useState } from 'react'
import styled from 'styled-components';
import backgroundImage from './elements/bible.jpg';
import Logo from './elements/logo.png';
import Box from './custom/Box'


function LeftSide(props){

const {cardPaymentHandler, 
ussdPaymentHandler, 
bankPaymentHandler, 
textPaymentHandler, 
transferPaymentHandler, 
supportHandler, 
reportHandler, 
updateHandler} = props

    return (
    <>
    <Box width='100%'>
        <Container>
           <div>
               <Div>
            <div>
                <img src={Logo} width={'60px'}/>
            </div> 
            <div>
                <h1><span>LIVING FAITH CHURCH<br />WORLDWIDE <br /> INTERNATIONAL</span></h1>
            </div>
           </Div>

            <div> <h1>Winners Online <br />Giving Platform</h1></div>
           </div>

        <div>
            <h3>GIVING OPTIONS</h3>
        <div><button onClick={cardPaymentHandler} >CARD PAYMENT</button>
        <button onClick={ussdPaymentHandler} >USSD</button>
        <button onClick={bankPaymentHandler}>BANK TRANSFER</button>
        </div>

        <h3>FOREX SPECIFICS</h3>
        <div>
            <button onClick={textPaymentHandler}>TEXT TO GIVE</button>
            <button onClick={transferPaymentHandler}>Bank Transfer</button>
        </div>

        <h3>SUPPORT AND INFORMATION</h3>
        <div><button onClick={supportHandler}>SUPPORT</button>
        <button onClick={reportHandler}>GET REPORT</button> 
        <button onClick={updateHandler}>UPDATES</button></div>
        </div>
        </Container>
        </Box>
    </>
    );
};














const Container = styled.div` 
	display:flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: inherit;
    padding: 10rem 2.5rem 10rem 8rem;

button {
	font-family: "Poppins", sans-serif;
    transition: 0.25s;
    cursor: pointer;
    color:white;
    border:1px solid #fff;
    border-radius: 7px;
    font-size: 14px;
    margin: 0 5px;
    background: none;
    font-weight: 700;
    margin-bottom: 15px;
    overflow: hidden;
    padding: 7px 10px;
}
button:hover {
  color: black;
  background-color: white;
}

h3{
	// margin-bottom: 0.2px;
	font-size: 18px;
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
}
`

export default LeftSide;