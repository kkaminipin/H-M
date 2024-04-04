import PropTypes from 'prop-types';
// const ProductCard = ({ menus: { id, img, title, price, choice, new, size } }) => {
const ProductCard = ({ menus }) => {
  return (
    <>
      <div className='product__img'>
        <img src={menus?.img} alt={menus?.title} />
      </div>
      <div className='product__title'>{menus?.title}</div>
      <div className='product__price'>{menus?.price}원</div>
      <div className='product__new'>{menus?.new ? '신제품' : null}</div>
      <ul className='product__color'>
        <li className='product__color-li'>검정</li>
        <li className='product__color-li'>흰</li>
      </ul>
    </>
  );
};
ProductCard.propTypes = {
  menus: PropTypes.object.isRequired,
};
export default ProductCard;
