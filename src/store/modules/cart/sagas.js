import { all, takeLatest, select, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { addProductToCartSuccess, addProductToCartFailure } from "./actions";

function* checkProductStock({ payload }) {
  const { product } = payload;

  const currentQuantity = yield select((state) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  const availableStockResponse = yield call(api.get, `stock/${product.id}`);

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock),
]);
