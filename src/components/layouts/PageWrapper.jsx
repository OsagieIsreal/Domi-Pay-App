import { useState } from 'react'
import styled from 'styled-components';
import Box from '../custom/Box'
import LeftContentWrapper from './LeftContentWrapper';
import MainContentWrapper from './MainContentWrapper';



function PageLayout({children}){

  const [state, setState] = useState(false )
    const [card, setCardPayment] = useState(true)
    const [ussd, setUssdPayment] = useState(false)
    const [bank, setBankPayment] = useState(false)
    const [text, setTextPayment] = useState(false)
    const [transfer, setTransferPayment]=useState(false)
    const [support, setSupport]=useState(false)
    const [report, setReport]=useState(false)
    const [update, setUpdate]=useState(false)
    const [close, setClose]=useState(false)



    const cardPaymentHandler = ()=>{
        setCardPayment(card => card == true ? true: true)
        setUssdPayment(false)
        setBankPayment(false)
        setTextPayment(false)
        setTransferPayment(false)
        setReport(false)
        setUpdate(false)
    console.log('card payment compont should show', card)

}

const closePage = ()=> {
    setCardPayment(true)
    setUssdPayment(false)
    setBankPayment(false)
    setTextPayment(false)
    setTransferPayment(false)
    setReport(false)
    setUpdate(false)
    setSupport(false)
}

 const ussdPaymentHandler = ()=>{
        setUssdPayment(ussd => ussd == false ? true: true)
         setCardPayment(false)
          setBankPayment(false)
          setTextPayment(false)
            setTransferPayment(false)
            setReport(false)
            setUpdate(false)
    console.log('card payment compont should show', ussd)

}

 const bankPaymentHandler = ()=>{
    setState(!state)
    setBankPayment(bank => bank== false ? true: true)
      setCardPayment(false)
    // setCardPayment(card => card == true ? false: bank == false ? false : true)
    setUssdPayment(false)
    setTextPayment(false)
    setTransferPayment(false)
    setReport(false)
    setUpdate(false)
    console.log('card payment compont should show', bank)

}

 const textPaymentHandler = ()=>{
       setState(!state)
    setTextPayment(text => text== false ? true: true)
    setCardPayment(false)
    setUssdPayment(false)
    setBankPayment(false)
    setTransferPayment(false)
    setReport(false)
    setUpdate(false)
    console.log('card payment component should show', text)

}

const transferPaymentHandler = ()=>{
    setState(!state)
    setTransferPayment(transfer => transfer == false ? true: true)
    setTextPayment(false)
    setCardPayment(false)
    setBankPayment(false)
    setUssdPayment(false)
    setReport(false)
    setUpdate(false)
    console.log('card payment component should show', transfer)
}

const supportHandler = ()=>{
    setState(!state)
    setTransferPayment(false)
    setTextPayment(false)
    setCardPayment(false)
    setBankPayment(false)
    setUssdPayment(false)
    setReport(false)
    setUpdate(false)
    setSupport(support => support == false ? true: true)
}

const reportHandler = ()=>{
    setState(!state)
    setTransferPayment(false)
    setTextPayment(false)
    setCardPayment(false)
    setBankPayment(false)
    setUssdPayment(false)
    setSupport(false)
    setUpdate(false)
    setReport(support => support == false ? true: true)
}

const updateHandler = ()=>{
    setState(!state)
    setTransferPayment(false)
    setTextPayment(false)
    setCardPayment(false)
    setBankPayment(false)
    setUssdPayment(false)
    setSupport(false)
    setReport(false)
    setUpdate(update => update == false ? true: true)
}

    return (
    <>
        <Container   width='100%' display='flex'  gap='2rem'>
        <Left>
            <div><LeftContentWrapper  
            cardPaymentHandler={cardPaymentHandler} 
            ussdPaymentHandler={ussdPaymentHandler} 
            bankPaymentHandler={bankPaymentHandler}
            textPaymentHandler={textPaymentHandler}
            transferPaymentHandler={transferPaymentHandler}
            supportHandler={supportHandler}
            reportHandler={reportHandler}
            updateHandler={updateHandler}
            // closePage={closePage}
            /></div>
        </Left>    
        <Right>
           <div> <MainContentWrapper 
                showCardPayment={card} 
            showUssdPayment={ussd} 
            showBankPayment={bank}
            showTextPayment={text} 
            showTransferPayment={transfer}
            showSupport={support}
            showReport={report} 
            showUpdate={update}
            closePage={ closePage}
            // removeClosePage={close}
         /></div>

        </Right>
    
        </Container>

        
    </>
    );
};

export default PageLayout;

const Container = styled(Box)`
    display: flex;

    // height: 100vh;
    overflow: hidden;

`;

    
const Left = styled(Box)`
position:fixed;
    width: 50%;
    padding: 0%;
    overflow-y: scroll;
    background-color: #e0e0e0;
`;

const Right = styled(Box)`
    width: 50%;
    overflow-y: scroll;

`;

//     div{
    //     height: 100vh;
    //     padding: 2rem;
    // } 