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



    const cardPaymentHandler = ()=>{
        setCardPayment(card => card == true ? true: true)
        setUssdPayment(false)
        setBankPayment(false)
    console.log('card payment compont should show', card)

}

 const ussdPaymentHandler = ()=>{
        setUssdPayment(ussd => ussd == false ? true: true)
         setCardPayment(false)
          setBankPayment(false)
    console.log('card payment compont should show', ussd)

}

 const bankPaymentHandler = ()=>{
    setState(!state)
    setBankPayment(bank => bank== false ? true: true)
      setCardPayment(false)
    // setCardPayment(card => card == true ? false: bank == false ? false : true)
    setUssdPayment(false)
    console.log('card payment compont should show', ussd)

}
    return (
    <>
        <Container   width='100%' display='flex'  gap='2rem'>
        <LeftContentWrapper  cardPaymentHandler={cardPaymentHandler} ussdPaymentHandler={ussdPaymentHandler}   bankPaymentHandler={bankPaymentHandler}/>
        <MainContentWrapper showCardPayment={card}  showUssdPayment={ussd} showBankPayment={bank} />
        {/*{ children} */}
        </Container>

        
    </>
    );
};



export default PageLayout;

const Container = styled(Box)`
 min-heigth: 100vh;
 overflow-x: hidden;

`