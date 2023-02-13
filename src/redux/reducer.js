import {
  FETCH_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  REMOVE_PRODUCTS_FROM_CART,
  ADD,
  SUBTRACT,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  FILTER, 
  HIGH_TO_LOW,
  LOW_TO_HIGH,
  SEARCH
} from "./actionTypes";




const initialState = {
  products: [],
  cart: [],
  total: 0,
  wishlist: [],
  filterData: [],
  temp: []
};

const productsReducer = (state = initialState, action) => {
  var foundIndex = 0;
  var foundIndexCart = 0;
  var { products, cart, total } = state;
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        temp: action.payload
      };

    case ADD_TO_CART:
      foundIndex = products.findIndex(x => x.title === action.itemToBeAdded);
      products[foundIndex]["cartCount"] = 1;
      cart.push(products[foundIndex]);
      total = total + products[foundIndex]["price"];
      return {
        ...state,
        products,
        cart,
        total
      };
    case ADD:
      foundIndex = products.findIndex(x => x.title === action.itemInc);
      products[foundIndex]["cartCount"] = products[foundIndex]["cartCount"] + 1;
      foundIndexCart = cart.findIndex(x => x.title === action.itemInc);
      cart[foundIndexCart]["cartCount"] = products[foundIndex]["cartCount"];
      total = total + products[foundIndex]["price"];
      return {
        ...state,
        products,
        cart,
        total
      };
    case SUBTRACT:
      foundIndex = products.findIndex(x => x.title === action.itemDec);
      products[foundIndex]["cartCount"] = products[foundIndex]["cartCount"] - 1;
      if (products[foundIndex]["cartCount"] === 0) {
        cart = cart.filter(function (obj) {
          return obj.title !== products[foundIndex].title;
        });
        delete products[foundIndex]["cartCount"];
      } else {
        foundIndexCart = cart.findIndex(x => x.title === action.itemDec);
        cart[foundIndexCart]["cartCount"] = products[foundIndex]["cartCount"];
      }
      total = total - products[foundIndex]["price"];
      return {
        ...state,
        products,
        cart,
        total
      };
    case REMOVE_PRODUCTS_FROM_CART:
      foundIndex = products.findIndex(x => x.title === action.itemToRemove);

      cart = cart.filter(function (obj) {
        return obj.title !== products[foundIndex].title;
      });
      delete products[foundIndex]["cartCount"];
      total = total - action.amount;

      return {
        ...state,
        products,
        cart,
        total
      };

    case ADD_TO_WISHLIST:
      const item = state.products.find(i => i.title === action.title);
      return {
        ...state,
        wishlist: [...state.wishlist, item]
      };
    case REMOVE_FROM_WISHLIST:
      const index = state.wishlist.findIndex(
        i => i.title === action.title
      );
      return {
        ...state,
        wishlist: [
          ...state.wishlist.slice(0, index),
          ...state.wishlist.slice(index + 1)
        ]
      };

    case FILTER:
      return {
        ...state,
        products: [...state.temp.filter((item) => item.category === action.payload ? item : "")],
      };

    case LOW_TO_HIGH:
      return {
        ...state,
        products: [...state.products.sort((a, b) => a.price - b.price)],
      };
    case HIGH_TO_LOW:
      return {
        ...state,
        products: [...state.products.sort((a, b) => b.price - a.price)],
      };

    case SEARCH:
      return {
        ...state,
        products: [...state.temp.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))]
      };

    default:
      return state;
  }
}

export default productsReducer