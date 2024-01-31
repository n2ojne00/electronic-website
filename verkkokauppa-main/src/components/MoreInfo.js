import React from "react";
import { AddCart } from "./AddCart";
import { Modal, Image } from "react-bootstrap";
import ProductDetails from "./ProductDetails";
import ProductReviewForm from "./ProductReviewForm"; 
import ReviewList from "./ReviewList";

const MoreInfo = ({ showModal, closeModal, selectedProduct }) => {
  return (
    <>
      <Modal show={showModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProduct && (
              <>
                <Image
                  src={selectedProduct.imageUrl || "default-image-url"}
                  alt={selectedProduct.productName}
                  style={{ marginRight: "10px", maxHeight: "300px" }}
                />
                {selectedProduct.productName}
              </>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct ? (
            <>
              <ProductDetails product={selectedProduct} />
              <AddCart
                product={selectedProduct}
                key={selectedProduct.id}
              />{" "}
              <br></br>
              <ProductReviewForm />
              <ReviewList />
            </>
          ) : (
            <p>Loading...</p> // loading indication
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MoreInfo;
