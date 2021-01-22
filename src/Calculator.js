import React, { useState } from 'react';


 const Calculator = ()  => {
    
    const [screen, setScreen] = useState('');

    const addValue = (e) => {
      setScreen(screen + e);
    }
    const resetScreen = () => setScreen('');

    const setResult = () => {
      setScreen(eval(screen));
    }
    
    return (
        <>
           <h1>Calculadora</h1>
           <h2 className='screen'>{screen}</h2>
           <hr/>
           <button onClick={() => addValue('1')}>1</button>
           <button onClick={() => addValue('2')}>2</button>
           <button onClick={() => addValue('3')}>3</button>
           <button onClick={() => addValue('+')}>+</button>
           <br/>
           
           <button onClick={() => addValue('4')}>4</button>
           <button onClick={() => addValue('5')}>5</button>
           <button onClick={() => addValue('6')}>6</button>
           <button onClick={() => addValue('-')}>-</button>
           <br/>

           <button onClick={() => addValue('7')}>7</button>
           <button onClick={() => addValue('8')}>8</button>
           <button onClick={() => addValue('9')}>9</button>
           <button onClick={() => addValue('*')}>*</button>
           <br/>

           <button onClick={() => addValue('0')}>0</button>
           <button onClick={() => resetScreen()}>C</button>
           <button onClick={() => setResult()}>=</button>
           <button onClick={() => addValue('/')}>/</button>
          

        </>
    )
}

export default Calculator;