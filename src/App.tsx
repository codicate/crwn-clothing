import React, { useRef, useState } from 'react';
import './App.scss';

import useEventListener from 'hooks/useEventListener';

import Searchbar from 'components/Searchbar';

function App() {
  const [input, setInput] = useState('');

  return <>

    <div>
      Input: {input}
    </div>

    <Searchbar
      returnInput={(input) => setInput(input)}
    />

  </>;
}

export default App;
