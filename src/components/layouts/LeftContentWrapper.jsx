// import { useState } from 'react'
import styled from 'styled-components';
import Box from '../custom/Box'
import LeftSide from '../LeftSide';
import { media } from '../../theme'
import PropTypes from 'prop-types'


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
    <div>
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
         

        
    </div>
    );
};



export default LeftContentWrapper

const Container = styled(Box)`
  min-heigth: 100vh;
  width: 100%;
  padding: 0;
  ${'' /* background-color: red; */}

  ${media.lt`
    width: 100%;
    height: 100vh;
  `}
  ${media.md`
    width: 100%;
    height: 100vh;
  `}
`

LeftContentWrapper.propTypes = {
  cardPaymentHandler: PropTypes.func,
  ussdPaymentHandler: PropTypes.func,
  bankPaymentHandler: PropTypes.func,
  textPaymentHandler: PropTypes.func,
  transferPaymentHandler: PropTypes.func,
  supportHandler: PropTypes.func,
  reportHandler: PropTypes.func,
  updateHandler: PropTypes.func,
}