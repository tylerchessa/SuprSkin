import { Fragment, useReducer, useState, useContext, useEffect } from 'react';
import './SignIn.scss';
import axios from 'axios';
import TextInput from './TextInput';
import { loginContext } from '../../providers/userContext';

function SignIn({loginBtn}) {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const { currentUser, login, logout, setUserUpdate } = useContext(loginContext);
  
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
  
    const clearInput = () => {
      setLoginEmail('');
      setLoginPassword('');
    };

    useEffect(() => {
    loginBtn && clearInput()
    }, [loginBtn])
  
    const handleLoginEmailChange = (e) => {
      setLoginEmail(e.target.value);
    };
  
    const handleLoginPasswordChange = (e) => {
      setLoginPassword(e.target.value);
    };
  
    const handleLoginKeyDown = (event) => {
      if (event.key === "Enter") {
        handleLoginSubmit(event)
      }
    };
  
    const handleLoginSubmit = (event) => {
      event.preventDefault();
  
      // Data validation - All fields must be populated.
      if (!loginEmail || !loginPassword) {
        if (!loginEmail && !loginPassword) {
          alert('Please enter both a email and a password.');
        } else if (!loginEmail) {
          alert('Please enter a email.');
        } else if (!loginPassword) {
          alert('Please enter a password.');
        }
        return;
      }
  
      axios
        .post(`/login`, { email: loginEmail, password: loginPassword })
        .then((res) => {
          // Handle success
          login(res.data.username)
          setUserUpdate(true)
          setSuccessMessage('Login successful!');
          setErrorMessage('');
        })
        .catch((error) => {
          // Handle error
          console.error('Error fetching user info:', error);
          setErrorMessage('An error occurred. Please try again.');
          setSuccessMessage('');
        });
    };

    return (
                <div className='sign-in'>
                    <h3>Sign In</h3>
                    <div className='login-holder'>
                        <TextInput
                            name="Email"
                            id="create-poll-option2"
                            type="email"
                            placeholder="email"
                            onChange={handleLoginEmailChange}
                            onKeyDown={handleLoginKeyDown}
                            value={loginEmail}
                        />

                        <TextInput
                            name="Password"
                            id="create-poll-option2"
                            type="password"
                            placeholder="password"
                            onChange={handleLoginPasswordChange}
                            onKeyDown={handleLoginKeyDown}
                            value={loginPassword}
                        />
                    </div>
                    <div className='button-holder'>
                        <button className='clear-btn' onClick={clearInput}>Clear</button>
                        <button className='login-btn' onClick={handleLoginSubmit}>Login</button> </div>
                </div>)
}

export default SignIn;