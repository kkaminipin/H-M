import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
const ProductAll = ({ productList }) => {
  return (
    <>
      <div className='product'>
        <ul className='product__ul'>
          {productList.map((menus, i) => {
            return (
              <li className='product__li' key={i}>
                <Link to={`product/${i}`}>
                  <ProductCard menus={menus} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProductAll;
