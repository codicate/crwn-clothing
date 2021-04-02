import { useState, useRef } from 'react';

export default function Searchbar(
  { returnInput }: { returnInput: (input: string) => void; }
) {
  const [input, setInput] = useState('');
  const searchbar = useRef<HTMLInputElement>(null);

  return (
    <div id='searchBar'>
      <input
        autoFocus
        type='text'
        placeholder='Search'
        ref={searchbar}
        value={input}
        onChange={
          e => setInput(e.target.value)
        }
        onKeyUp={(e) =>
          e.key === 'Enter' && returnInput((e.target as HTMLInputElement).value)
        }
      />
      <div id='clearDiv'>
        <span
          id='clear'
          className='material-icons btn'
          onClick={() => {
            setInput('');
            searchbar.current && searchbar.current.focus();
          }}
        >
          clear
        </span>
      </div>
    </div>
  );
}

export { };