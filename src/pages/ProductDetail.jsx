import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/kkaminipin/H-M/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  });

  return (
    <>
      <div className='product-detail'>
        <div className='product-detail__img'>
          <img src={product?.img} alt={product?.title} />
        </div>
        <div className='product-detail__title'>{product?.title}</div>
        <div className='product-detail__price'>{product?.price}원</div>
        <div className='product-detail__new'>
          {product?.new ? '신제품' : null}
        </div>
        <ul className='product-detail__color'>
          <li className='product-detail__color-li'>검정</li>
          <li className='product-detail__color-li'>흰</li>
        </ul>
      </div>
    </>
  );
};

export default ProductDetail;
