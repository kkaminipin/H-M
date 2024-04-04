import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Membership = ({ authenticate, setAuthenticate }) => {
  return (
    <ul className='membership'>
      {
        authenticate === false ?
          <li className='membership__item membership__login'>
            <Link to="/login" className='membership__link'>
              <FontAwesomeIcon icon={faUser} />
              로그인
            </Link>
          </li>
          :
          <li className='membership__item membership__logout'>
            <Link to='/' className='membership__link' onClick={() => {
              setAuthenticate(false);
            }}>
              로그아웃
            </Link>
          </li>
      }
    </ul>
  )
}

export default Membership