import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AddCart = ({ product }) => {
  const navigate = useNavigate();

  const addToCart = () => {
    navigate("/cart", { state: { product } });
  };

  return (
    <div>
      <Button
        className="btn btn-primary btn-md"
        style={{ width: "100%" }}
        variant="primary"
        onClick={() => addToCart(product)}
      >
        Lisää ostoskoriin
      </Button>
    </div>
  );
};
