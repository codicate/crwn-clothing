// import { FormEvent, useState } from 'react';
// import Input from 'components/Input';
// import Button from 'components/Button';

// type inputItem = {
//   name: string;
//   value: any;
//   type?: string;
//   label?: string;
//   required?: boolean;
// }

// const Form = ({ inputItems }:
//   {
//     inputItems: inputItem[]
//   }
// ) => {
//   const [input, setInput] = useState(inputItems);

//   const submitHandler = (e: FormEvent) => {
//     e.preventDefault();
//     setInput(inputItems);
//   };

//   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target as HTMLInputElement;

//     setInput({
//       ...input,
//       [name]: value
//     });
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <Input
//         required
//         type='text'
//         name='displayName'
//         label='Display Name'
//         value={input.displayName}
//         changeHandler={changeHandler}
//       />
//       <Input
//         required
//         type='email'
//         name='email'
//         label='email'
//         value={input.email}
//         changeHandler={changeHandler}
//       />
//       <Input
//         required
//         type='password'
//         name='password'
//         label='password'
//         value={input.password}
//         changeHandler={changeHandler}
//       />
//       <Input
//         required
//         type='password'
//         name='confirmPassword'
//         label='Confirm Password'
//         value={input.confirmPassword}
//         changeHandler={changeHandler}
//       />
//       <Button
//         type='submit'
//       >
//         Sign Up
//         </Button>
//     </form>
//   );
// };

// export default Form;

export { };