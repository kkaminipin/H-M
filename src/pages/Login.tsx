import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {

  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate('/')
  }
  return (
    <form onSubmit={loginUser} className='login'>
      <div className='login__item login__id'>
        <input type="text" id="connection__id" className='login__input login__id-input' />
        <label htmlFor="connection__id" className='login__label login__id-label'>아이디</label>
      </div>
      <div className='login__item login__password'>
        <input type="password" id="connection__password" className='login__input login__password-input' />
        <label htmlFor="connection__password" className='login__label login__password-label'>비밀번호</label>
      </div>
      <button type='submit'>로그인</button>
    </form >
  )
}

export default Login