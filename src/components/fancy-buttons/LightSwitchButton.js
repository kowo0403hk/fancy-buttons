import { useState } from 'react';

function LightSwitchButton() {
  const [ light, setLight ] = useState('off');

  const handleClick = () => setLight(light === 'on' ? 'off' : 'on');

  return (
    <button onClick={handleClick} className='LightSwitchButton'>
      {light === 'on' && <span className="on"><i>💡</i>I'm on!</span>}
      {light === 'off' && <span className="off"><i>💡</i>I'm off!</span>}
    </button>
  );
};

export default LightSwitchButton;