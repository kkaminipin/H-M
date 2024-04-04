import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get('q') || '';
    console.log(searchQuery);
    const url = `https://my-json-server.typicode.com/kkaminipin/H-M/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
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
