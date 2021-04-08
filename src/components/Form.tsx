import { FormEvent, useState } from 'react';
import Input from 'components/Input';

const Form = ({ submitFn, children, inputItems }:
  {
    submitFn?: () => void;
    children?: React.ReactNode;
    inputItems: [
      string, any, string?,
      { type?: string, required?: boolean; }?
    ][];
  }
) => {
  const defaultItems = inputItems.reduce((
    dict: { [name: string]: any; }, item
  ) => {
    dict[item[0]] = item[1];
    return dict;
  }, {});

  const [input, setInput] = useState(defaultItems);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    submitFn && submitFn();
    setInput(defaultItems);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(defaultItems);
    console.log(name, value);

    setInput({
      ...input,
      [name]: value
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {
        inputItems.map((item, idx) => (
          <Input
            key={idx}
            changeHandler={changeHandler}
            name={item[0]}
            value={input[item[0]]}
            label={item[2]}
            {...item[3]}
          />
        ))
      }
      {children}
    </form>
  );
};

export default Form;