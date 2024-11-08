import { useState } from 'react'
import styled from 'styled-components';
import Box from '../custom/Box'
import LeftSide from '../LeftSide';


const LeftContentWrapper = (props) => {
    const {cardPaymentHandler, ussdPaymentHandler,  bankPaymentHandler} = props
    return (
    <>
        <Container   width='45%'  height='100vh'>
         <LeftSide cardPaymentHandler={cardPaymentHandler} ussdPaymentHandler={ussdPaymentHandler}  bankPaymentHandler={bankPaymentHandler}/>
        </Container>
         

        
    </>
    );
};



export default LeftContentWrapper

const Container = styled(Box)`
 min-heigth: 100vh;

`