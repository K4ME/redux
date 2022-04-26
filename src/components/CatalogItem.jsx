import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCartRequest } from "../store/modules/cart/actions";

function CatalogItem({ product }) {
  const dispatch = useDispatch();
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
}

export default CatalogItem;
