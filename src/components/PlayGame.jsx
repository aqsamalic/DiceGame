import styled from 'styled-components'
import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../Button/Button'
import Rules from './Rules'

const PlayGame = () => {
  const[score,setScore]=useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const[currentdice,setcurrentdice]=useState(1);
  const [error, setError] = useState("");
  const[showRules,setShowRules]=useState(false);
  const generateRandomNumber = (min, max) => {
        
    return Math.floor(Math.random() *(min-max) + max);
   }
   const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const randomNumber = generateRandomNumber(1, 7);
    setcurrentdice((prev)=>randomNumber)

    if(selectedNumber === randomNumber){
      setScore((prev)=>prev+1);
      }
      else {
        setScore((prev) => prev - 2);
      }
      setSelectedNumber(undefined);
  }   
 return (
    <MainContainer>
    <div className='top-section'>
       <TotalScore score={score}/>
      <NumberSelector
      error={error}
      setError={setError}
      selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber} 
        /> 
    </div>
    <RoleDice  currentdice={currentdice} rollDice={rollDice}/>
    <div className='btn'>
      < OutlineButton onClick={()=>setScore(0)}>Reset Score</ OutlineButton>
      <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
    </div>
    {showRules && <Rules />}
    </MainContainer>
  )
}

export default PlayGame;

const MainContainer = styled.main`
.top-section{
  display: flex;
  justify-content:space-around;
  align-items: center;
  
}
.btn{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
}
`