import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SearchFunction = () => {

  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState('');

  const click = () => {
    searchItem && navigate(`/?q=${searchItem}`)
    // searchItem || navigate(`/?q=${searchItem}`);  이건 안되는 이유
  }
  const change = (e) => {
    setSearchItem(e.target.value);
  }

  return (
    <>
      <div className='search'>
        <button type='button' className='search__btn' onClick={click}>
          <FontAwesomeIcon icon={faSearch} />
          <span className='blind'>검색</span>
        </button>
        <input
          type='text'
          placeholder=''
          className='input-middle search__input'
          onChange={change}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              // click();
            }
          }}
        />
      </div>
    </>
  )
}

export default SearchFunction;