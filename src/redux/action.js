import {
  FETCH_PRODUCTS_SUCCESS,
  ADD,
  ADD_TO_CART,
  SUBTRACT,
  REMOVE_PRODUCTS_FROM_CART,
  FILTER, HIGH_TO_LOW, LOW_TO_HIGH, SEARCH
} from "./actionTypes";

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const addToCart = (title) => ({
  type: ADD_TO_CART,
  itemToBeAdded: title
})

export const add = (title) => ({
  type: ADD,
  itemInc: title
})

export const subtract = (title) => ({
  type: SUBTRACT,
  itemDec: title
})

export const removeProductsFromCart = (title, amount) => ({
  type: REMOVE_PRODUCTS_FROM_CART,
  itemToRemove: title,
  amount: amount
})


export const addToWishlist = title => {
  return {
    type: "ADD_TO_WISHLIST",
    title
  };
};

export const removeFromWishlist = title => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    title
  };
};

export const sortProducts = () => {
  return{
      type:HIGH_TO_LOW,
  }
};
export const sortProductslh = () => {
  return{
      type:LOW_TO_HIGH,
  }
};
export const filterData = (payload) => {
  return{
      type:FILTER,
      payload,
  }
};

export const search=()=>{
  return{
    type:SEARCH
  }
}



export const fetchProducts = () => (dispatch) => {
  fetch("https://fakestoreapi.com/products")
    .then((d) => d.json())
    .then((d) => dispatch(fetchProductsSuccess(d)))
    .then(json => console.log(json))
    .catch((e) => console.log(e));
};
