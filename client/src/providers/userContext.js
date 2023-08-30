import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios';


export const loginContext = createContext();

export default function LoginProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserInfo, setCurrentUserInfo] = useState(null);
//   const [userUpdate, setUserUpdate] = useState(false);

  useEffect(() => {
    setCurrentUser(Cookies.get('username'));
  }, [])

  useEffect(() => {
    currentUser &&
    axios
      .get(`http://localhost:8001/user/${currentUser}`)
      .then((res) => {
        setCurrentUserInfo(res.data)
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching user info:', error);
      });
    //   setUserUpdate(false);
  }, [currentUser])

  const login = function (username) {
    Cookies.set('username', username, { expires: 1 })
    setCurrentUser(username);
  };

  const logout = function () {
    Cookies.remove('username')
    setCurrentUser(null);
    setCurrentUserInfo(null);
  };

  const userInfo = { currentUserInfo, currentUser, login, logout };

  return (
    <loginContext.Provider value={userInfo}>
      {props.children}
    </loginContext.Provider>
  );
};