import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(14)
 
  const addcount = () =>{
    // console.log("sam");
    if(counter < 20){
    setCounter(counter + 1)
    }
  }
  const decreasecount = () =>{
    if(counter > 0){
    setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Welcome to react</h1>
      <h3>counter is set to : {counter}</h3>
      <button 
      onClick={addcount}>
        add</button>
      <button
      onClick={decreasecount} >
        decrease</button>
    </>
  )
}

export default App
