import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login';
import ProductAll from '../../pages/ProductAll';
import PrivateRoute from '../../route/PrivateRoute';

const Container = ({ authenticate, setAuthenticate }) => {
  return (
    <>
      <main className='container'>
        <div className='inner'>
          <Routes>
            <Route path='/' element={<ProductAll />} />
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
Container.propTypes = {
  authenticate: PropTypes.bool.isRequired,
  setAuthenticate: PropTypes.func.isRequired,
};
export default Container;
