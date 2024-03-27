import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Membership from '../Membership';
import { Link } from 'react-router-dom';

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
              <button type='button' className='blind'>
                검색
              </button>
              <div className='search'>
                <FontAwesomeIcon icon={faSearch} className='search__btn' />
                <input
                  type='text'
                  placeholder=''
                  className='input-middle search__input'
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
