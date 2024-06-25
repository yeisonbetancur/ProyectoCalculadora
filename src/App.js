
import './App.css';
import logo from "./assets/logo.jpg";
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {
  const [input, setInput] = useState("");

  const addInput = value => {
      setInput(input + value);
  };
  const calculateResult = () => {
    if(input){//un string vacio es falsy
      setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
      <div className='logoContainer'>
        <img 
          className='logo'
          src={logo}
          alt='logo'
        />
      </div>
      <div className='calcContainer'>
        <Screen input={input}/>
        <div className='fila'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manageClick={calculateResult}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>

        </div>
        <div className='fila'>
          <ButtonClear manageClear={()=>setInput("")}>
            Clear
            </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
