import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'

const RoleDice = ({roleDice,currentDice}) => {



  return (
    <DiceContainer>
    <div className='dice' onClick={roleDice}>
      <img src={`/Images/dices/dice_${currentDice}.png`} alt="dice 1" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};
export default RoleDice;

const DiceContainer = styled.div `
    display:flex;
    /* justify-content: center; */
    margin-top:50px;
    flex-direction: column;
    align-items:center;
    .dice{
        cursor:pointer;
    }
`
