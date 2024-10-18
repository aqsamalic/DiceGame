import React from 'react'
import styled from 'styled-components'              

const Rules = () => {
  return (
    <RulesContainer>
    <h1>How to play Dice Game</h1>
    <div className='text'>
    <p>1. Select the number on the dice</p>
    <p>2. Roll the dice</p>
    <p>3. If you win, you get your points added to your score. If you lose, you lose your points.</p>
    </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
  max-width: 900px;
margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 50px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
    font-weight: 800;
  }
  .text {
    margin-top: 24px;
    font-weight: 500;
  }
`;