import PropTypes from 'prop-types';

import Membership from '../Membership';
import { Link } from 'react-router-dom';
import SearchFunction from '../SearchFunction';

const Header = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M HOME',
    'Sale',
    '지송 가능성',
  ];

  return (
    <>
      <header className='header'>
        <div className='inner'>
          <div className='header__membership'>
            <Membership
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          </div>
          <div className='header__logo'>
            <h1 className='logo'>
              <Link to='/' className='logo__link'>
                H&M
                <img src='' alt='' className='logo__img' />
              </Link>
            </h1>
          </div>
          <div className='header__menu'>
            <nav className='header__gnb'>
              <ul className='gnb'>
                {menuList.map((item, i) => {
                  return (
                    <li className='gnb__li' key={i}>
                      <a href='' className='gnb__link'>
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className='header__search'>
              <SearchFunction />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
Header.propTypes = {
  authenticate: PropTypes.bool.isRequired,
  setAuthenticate: PropTypes.func.isRequired,
};
export default Header;
