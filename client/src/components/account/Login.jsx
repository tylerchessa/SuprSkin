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

 

  return (
    <div className='login'>
      <div className='login-holder'>
          <SignIn loginBtn={loginBtn}/> 
          <div className='why-sign-up-holder'>
            <div className='title-holder'>
            <h4>Become a member of Supr Skin today</h4>
            </div>
            <ul>
              <li>monthly newsletters</li>
              <li>skin tips</li>
              <li>be apart of a natural skin health community</li>
            </ul>
          </div>
          </div>
          <div className='login-holder-sign-up'>
            <SignUp setLoginBtn={setLoginBtn}/> 
          </div>
    </div> 
  );
}

export default Login;