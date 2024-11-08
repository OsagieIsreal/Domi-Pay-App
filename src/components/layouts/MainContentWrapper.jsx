import { useState } from 'react'
import styled from 'styled-components';
import Box from '../custom/Box'
import CardPayment from '../CardPayment';
import Ussd from '../Ussd';
import BankTransfer from '../BankTransfer';
import TextToGive from '../TextToGive';
import BankTransfers from '../BankTransfers';
import Support from '../Support';
import Updates from '../Updates';
import GetReport from '../GetReport';

function MainContentWrapper({showCardPayment, showUssdPayment, showBankPayment}){

    return (
    <>
        <Container   width='45%'>

        {showCardPayment &&  <CardPayment /> }

        {showUssdPayment && <Ussd /> }

        {showBankPayment && <BankTransfer />}

       
         

        </Container>
         
          {/*><TextToGive /><BankTransfers /><Support /><Updates /><GetReport />*/}

        
    </>
    );
};



export default MainContentWrapper

const Container = styled(Box)`
 min-heigth: 100vh;

`