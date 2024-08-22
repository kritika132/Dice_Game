import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({ setError, error,selectedNumber,setSelectedNumber}) => {
  const arrNumber = [1,2,3,4,5,6];
  
  const numberSelectorHandler=(value)=>{
    setSelectedNumber(value)
    setError("")
  };

  // console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className="flex">
       {arrNumber.map((value,i) =>(
        <Box
        isSelected={value === selectedNumber} key={i} onClick={()=>numberSelectorHandler(value)}>{value}</Box>
       ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div `
  display:flex;
  flex-direction: column;
  align-items: end;
  .flex{
    display:flex;
    gap:24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
  }
  .error{
    color: red;
    font-size: 18px;
    font-weight: 400;
  }
`;
const Box = styled.div `
    display:grid;
    place-items:center;
    height: 62px;
    width:62px;
    cursor: pointer;
    font-size: 24px;
    font-weight:700;
    border:2px solid black;
    background-color: ${(props) =>(props.isSelected ? "black" : "white")};
    color: ${(props) =>(!props.isSelected ? "black" : "white")}
`;