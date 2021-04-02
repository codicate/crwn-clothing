import React, { useRef, useState } from 'react';
import './App.scss';

import useEventListener from 'hooks/useEventListener';

function App() {
  const [counter, setCounter] = useState(0);
  const button = useRef(null);

  const incrementFn = () => {
    console.log('hello');
    setCounter(counter => counter + 1);
  };

  useEventListener(button, 'click', incrementFn);

  return <>

    <div>
      Counter: {counter}
    </div>

    <button
      ref={button}
    >
      Increment
    </button>

  </>;
}

export default App;
