import { Fragment, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import './SignUp.scss';
import { useContext } from 'react';
import { loginContext } from '../../providers/userContext';
import TextInput from './TextInput';

let loggedIn = false;

function SignUp({loginBtn, setLoginBtn}) {

  const { currentUser, login, logout, setUserUpdate } = useContext(loginContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const clearInput = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setUsername('');
    setPassword('');
    setBirthdate('');
  };

  useEffect(() => {
  !loginBtn && clearInput()
}, [loginBtn])

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSignUpSubmit(event)
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      firstName: firstName,
      lastName: lastName,
      birthdate: birthdate,
      email: email,
      username: username,
      password: password
    };

    axios
      .post(`/signup`, userInfo)
      .then((res) => {
        // Handle success
        setSuccessMessage('Sign up successful!');
        setErrorMessage('');
        setLoginBtn(true)
      })
      .catch((error) => {
        // Handle error
        console.error('Error signing up user:', error);
        setErrorMessage('An error occurred. Please try again.');
        setSuccessMessage('');
      });
  };

  return (
    <div className='sign-up'>
    <h3>Sign Up</h3>
          <div className='sign-up-holder'>      
      <TextInput
        name="First name"
        id="create-poll-option2"
        type="text"
        placeholder="first name"
        onChange={handleFirstNameChange}
        onKeyDown={handleSignUpKeyDown}
        value={firstName}
        // className="sign-up"
      /> 
      <TextInput
        name="Last name"
        id="create-poll-option2"
        type="text"
        placeholder="last name"
        onChange={handleLastNameChange}
        onKeyDown={handleSignUpKeyDown}
        value={lastName}
        // className="sign-up"
      /> 
      <TextInput
        name="E-mail"
        id="create-poll-option2"
        type="email"
        placeholder="email"
        onChange={handleEmailChange}
        onKeyDown={handleSignUpKeyDown}
        value={email}
      />
      <TextInput
        name="Date of birth"
        id="create-poll-option2"
        type="date"
        placeholder="birthdate"
        onChange={handleBirthdateChange}
        onKeyDown={handleSignUpKeyDown}
        value={birthdate}
        className=" date-input"
      />
      <TextInput
        name="Username"
        id="create-poll-option2"
        type="text"
        placeholder="username"
        onChange={handleUsernameChange}
        onKeyDown={handleSignUpKeyDown}
        value={username}
        // className="sign-up"
      />  
      <TextInput
        name="Password"
        id="create-poll-option2"
        type="password"
        placeholder="password"
        onChange={handlePasswordChange}
        onKeyDown={handleSignUpKeyDown}
        value={password}
        // className="sign-up"
      />
       </div>
            <div className='button-holder'>
              <button className='clear-btn' onClick={clearInput}>Clear</button>
              <button className='login-btn' onClick={handleSignUpSubmit}>Sign Up</button>
            </div>
    </div>
  );
}

export default SignUp;