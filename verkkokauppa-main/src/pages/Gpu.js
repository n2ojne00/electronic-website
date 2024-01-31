import React from "react";
import axios from "axios";
import MoreInfo from "../components/MoreInfo";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";


export const Naytonohjaimet = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/products?category=Naytonohjaimet")
      .then((resp) => setProducts(resp.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
    <h3 className="text-center" style={{marginTop:"10px"}}>Näytönohjaimet</h3>
    <div className="row justify-content-center">
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            openModal={openModal}
          />
        ))}

      {/* Render the modal using MoreInfo */}
      <MoreInfo
        showModal={showModal}
        closeModal={closeModal}
        selectedProduct={selectedProduct}
      />
    </div>
    </>
  );
};
