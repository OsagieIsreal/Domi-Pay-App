// import { useState } from 'react'
import styled from 'styled-components';
import Box from '../custom/Box'
import CardPayment from '../CardPayment';
import Ussd from '../Ussd';
import BankTransfer from '../BankTransfer';
import TextToGive from '../TextToGive';
import Transfers from '../Transfers';
import Support from '../Support';
import Updates from '../Updates';
import GetReport from '../GetReport';
import { media } from '../../theme'


import PropTypes from 'prop-types'

MainContentWrapper.propTypes = {
  showCardPayment: PropTypes.bool,
  showUssdPayment: PropTypes.bool,
  showBankPayment: PropTypes.bool,
  showTextPayment: PropTypes.bool,
  showTransferPayment: PropTypes.bool,
  showSupport: PropTypes.bool,
  showReport: PropTypes.bool,
  showUpdate: PropTypes.bool,
  
  closePage: PropTypes.func.isRequired,
}


function MainContentWrapper({ 
    showCardPayment, 
    showUssdPayment, 
    showBankPayment, 
    showTextPayment, 
    showTransferPayment, 
    showSupport, 
    showReport, 
    showUpdate, 
    closePage }){
      // removeClosePage

      return (
        <>
          <Container width='45%'>
            {showCardPayment && <CardPayment />}

            {showUssdPayment && <Ussd closePage={closePage} />}

            {showBankPayment && <BankTransfer closePage={closePage} />}

            {showTextPayment && <TextToGive closePage={closePage} />}

            {showTransferPayment && <Transfers closePage={closePage} />}

            {showSupport && <Support closePage={closePage} />}

            {showReport && <GetReport closePage={closePage} />}

            {showUpdate && <Updates closePage={closePage} />}

            {/*{removeClosePage}*/}
          </Container>

          {/*><TextToGive /><BankTransfers /><Support /><Updates /><GetReport />*/}
        </>
      )
    };



export default MainContentWrapper

const Container = styled(Box)`
  min-heigth: 100vh;
  padding: 0;
  width: 35rem;
  position: absolute;
  left: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #666666;
  box-sizing: border-box;
  ${'' /* padding: 2rem; */}

  ${media.lt`
   display: none;
  `}
`

