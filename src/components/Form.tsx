import { FormEvent, useState } from 'react';
import Input from 'components/Input';

const Form = ({ submitFn, inputItems, children }:
  {
    submitFn?: () => void;
    children?: React.ReactNode;
    inputItems: {
      name: string;
      value: any;
      type?: string;
      label?: string;
      required?: boolean;
    }[];
  }
) => {
  const [input, setInput] = useState(inputItems);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    submitFn && submitFn();
    setInput(inputItems);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {
        inputItems.map(item => (
          <Input
            changeHandler={changeHandler}
            {...item}
          />
        ))
      }
      {children}
    </form>
  );
};

export default Form;