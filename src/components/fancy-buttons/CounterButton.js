import { useState } from 'react';

function CounterButton() {
  const [ clickAmount, setClickAmount ] = useState(0);

  const handleClick = () => {
    setClickAmount(clickAmount + 1);
  }

  return (
    <button onClick={handleClick} className='CounterButton'>
      Your clicked me {clickAmount} amount of times.
    </button>
  );
};

export default CounterButton;