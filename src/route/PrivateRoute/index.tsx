import React from 'react';
import PropTypes from 'prop-types';
import ProductDetail from '../../pages/ProductDetail';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticate }) => {
  return (
    <>
      {
        authenticate ? <ProductDetail /> : <Navigate to="/login" />
      }
    </>
  )
}

PrivateRoute.propTypes = {
  authenticate: PropTypes.bool.isRequired,
};
export default PrivateRoute;


