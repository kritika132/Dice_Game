import React from 'react'
import '../App.css';
import styled from 'styled-components';
import { Button } from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div className='box'><img 
      src="/Images/dice.png"/></div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div `
max-width:1180px;
display:flex;
margin:0 auto;
align-items: center;
height:100vh;

.box img{
    width:90%;
}
.content{
    h1{
        font-size: 77px;
        white-space: nowrap;
    }
}
`;
