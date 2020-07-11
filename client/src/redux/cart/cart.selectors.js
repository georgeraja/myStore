//two types of selector 1)input selector that doenst need createSelector,output selector uses input selector

import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
const selectUser = (state) => state.user;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumaltedQuantity, cartItem) =>
      accumaltedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
