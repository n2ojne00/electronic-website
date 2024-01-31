import React from 'react';
import { useCurrency } from './CurrencyContext';

const ProductDetails = ({ product }) => {
  const { selectedCurrency } = useCurrency();

  const formatPrice = () => {
    if (selectedCurrency === 'usd') {
      return product.price_usd + '$' || 'No price';
    } else if (selectedCurrency === 'eur') {
      return product.price + '€' || 'No price';
    }
    return 'No price';
  };

  return (
    <div>
      <p>{product.description}</p>
      <p>{product.description1}</p>
      <p>{product.description2}</p>
      <p>{product.description3}</p>
      <p>Price: {formatPrice(product.price)}</p>
    </div>
  );
};

export default ProductDetails;