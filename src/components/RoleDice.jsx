import styled from 'styled-components'
import React from 'react'
import { useState } from 'react'

const RoleDice = ({rollDice, currentdice}) => {

  const resetScore = () => {
    setScore(0);
  };
      
  return (
    <RoleDiceContainer >
        <div className='dice' onClick={rollDice}>
        
        <img src={`/dice_${currentdice}.png`} alt="dice" />
        </div>
        <p>Click on Dice to roll</p>
        </RoleDiceContainer>
  )
}

export default RoleDice

const RoleDiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;

p{
  font-size: 24px;
  font-weight: 800px;
}

.dice{
    cursor: pointer;
}`;
