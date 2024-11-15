import { useState } from 'react'
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

function MainContentWrapper({
    showCardPayment, 
    showUssdPayment, 
    showBankPayment, 
    showTextPayment, 
    showTransferPayment, 
    showSupport, 
    showReport, 
    showUpdate, 
    // removeClosePage
    closePage
}){

    return (
    <>
        <Container   width='45%' >

        {showCardPayment &&  <CardPayment /> }

        {showUssdPayment && <Ussd closePage={closePage} /> }

        {showBankPayment && <BankTransfer closePage={closePage} />}

        {showTextPayment && <TextToGive closePage={closePage} /> }

        {showTransferPayment && <Transfers closePage={closePage} />}

        {showSupport && <Support closePage={closePage} />}

        {showReport && <GetReport closePage={closePage} />}
        
        {showUpdate && <Updates closePage={closePage} />}

        {/*{removeClosePage}*/}


       
         
        </Container>
         
          {/*><TextToGive /><BankTransfers /><Support /><Updates /><GetReport />*/}

        
    </>
    );
};



export default MainContentWrapper

const Container = styled(Box)`
 min-heigth: 100vh;
 padding: 0;
 width:30rem;
 position:absolute;
 left: 42rem;
`