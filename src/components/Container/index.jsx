import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login';
import ProductAll from '../../pages/ProductAll';
import { useEffect, useState } from 'react';
import PrivateRoute from '../../route/PrivateRoute';

const Container = ({ authenticate, setAuthenticate }) => {
  const [productList, setProductList] = useState([]); // 상품 리스트들을 담을 state
  const getProducts = async () => {
    // 상품 리스트들을 불러오는 API 함수
    const url = 'http://localhost:5000/products';
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <main className='container'>
        <div className='inner'>
          <Routes>
            <Route
              path='/'
              element={<ProductAll productList={productList} />}
            />

            <Route
              path='/login'
              element={<Login setAuthenticate={setAuthenticate} />}
            />

            <Route
              path='/product/:id'
              element={<PrivateRoute authenticate={authenticate} />}
            />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Container;
