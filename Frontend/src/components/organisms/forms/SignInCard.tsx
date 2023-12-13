import React, { useState } from 'react'
import AuthButton from '../../atoms/buttons/AuthButton'
import StandardInputLabel from '../../molecules/StandardInputLabel';
import AccountTag from '../../molecules/AccountTag';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../store/entities/user/hooks/useUser';

interface Props {

}

interface SignInFormData {
  email: string;
  password: string;
}


const SignInCard: React.FC<Props> = (): React.JSX.Element => {

  const navigate = useNavigate();
  const { setUser } = useUser();

  const [ formData, setFormData ] = useState<SignInFormData>({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      await setUser(formData);
      navigate("/todo");
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  const handleClick = () => {
    navigate('/signup')
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-md flex flex-col justify-center items-start'>
      <h1 className='text-2xl font-semibold mb-4 w-full text-center'>Sign In</h1>
      <form className='w-full' onSubmit={ handleSubmit }>
        <StandardInputLabel id='email' label='Email: ' name='email' type='email' placeholder='Email' value={formData.email} onChange={ handleChange } style='mb-2 gap-2 flex flex-col justify-between items-start'/>
        <StandardInputLabel id='password' label='Password: ' name='password' type='password' placeholder='Password' value={formData.password} onChange={ handleChange } style='mb-2 gap-2 flex flex-col justify-between items-start'/>
        <AuthButton 
        label='Sign In' 
        style='p-1 border-2 my-2 bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'/>
      </form>
      <AccountTag label='Dont have an account?' btnLabel='signup' onClick={ handleClick }/>
    </div>
  )
}

export default SignInCard