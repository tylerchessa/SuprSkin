import { Fragment, useReducer, useState } from 'react';
import axios from 'axios';
import './Login.scss';
import { useContext } from 'react';
import { loginContext } from '../../providers/userContext';
// import TextInput from '../InnerComponents/TextInput';
import SignIn from './SignIn';
import SignUp from './SignUp';

let loggedIn = false;

function Login(props) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [loginBtn, setLoginBtn] = useState(true);
  const { currentUser, login, logout, setUserUpdate } = useContext(loginContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    setLoginBtn(true);
  };

  const handleSignUp = () => {
    setLoginBtn(false);
  };

  return (
    <div className='login'>
      {successMessage && <h2 className='success-message'>{successMessage}</h2>}
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      <div className='sign-in-holder'>
          <SignIn loginBtn={loginBtn}/> 
          <div className='why-sign-up-holder'> </div>
          </div>
          <div className='sign-up-holder'>
          <div className='why-sign-up-holder'> </div>
          <SignUp setLoginBtn={setLoginBtn} loginBtn={loginBtn}/> 
          </div>
    </div> 
  );
}

export default Login;