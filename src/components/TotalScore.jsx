import styled from 'styled-components'
import React from 'react'

const TotalScore = ( {score}) => {
  return (
    <div>
        <ScoreContainer>
            <h1>{score}</h1>
            <p>TotalScore</p>
        </ScoreContainer>
    </div>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  max-height: 200px;

  h1 {
    font-size: 100px;
    line-height: 20px;
    font-weight: 800;
    

  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;