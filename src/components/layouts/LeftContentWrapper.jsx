import { useState } from 'react'
import styled from 'styled-components';
import Box from '../custom/Box'
import LeftSide from '../LeftSide';


const LeftContentWrapper = (props) => {
    const {cardPaymentHandler, 
    ussdPaymentHandler, 
    bankPaymentHandler, 
    textPaymentHandler, 
    transferPaymentHandler, 
    supportHandler, 
    reportHandler,
    updateHandler
    // closePage
} = props
    return (
    <>
        <Container   width='45%'  height='100vh'>
         <LeftSide 
         cardPaymentHandler={cardPaymentHandler} 
         ussdPaymentHandler={ussdPaymentHandler}  
         bankPaymentHandler={bankPaymentHandler} 
         textPaymentHandler={textPaymentHandler}
         transferPaymentHandler={transferPaymentHandler}
         supportHandler={supportHandler}
         reportHandler={reportHandler} 
         updateHandler={updateHandler}
         // closePage={closePage}
          />
        </Container>
         

        
    </>
    );
};



export default LeftContentWrapper

const Container = styled(Box)`
 min-heigth: 100vh;
 width:33rem;
 padding: 0;

`