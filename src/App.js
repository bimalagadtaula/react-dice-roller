import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App=() =>{
  const[diceNumber, SetDiceNumber]= useState(3);
  const[diceNumber2, SetDiceNumber2]= useState(1);

  const refreshDice=()=>{
    const ranno = Math.floor(Math.random()*6)+1;
    SetDiceNumber(ranno);
    const ranno2 = Math.floor(Math.random()*6)+1;
    SetDiceNumber2(ranno2);
  }
  return (
    <div>
  <center>
<img src={require(`./assets/${diceNumber}.png`)} alt="error loading page" height={160} width={170}></img>
<img src={require(`./assets/${diceNumber2}.png`)} alt="error loading page" height={160} width={170}></img>
  <br/>
  <button onClick={()=>refreshDice()} className='button'>Click</button>
  </center>
    </div>
  );
}

export default App;
