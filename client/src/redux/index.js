import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { order } from "./reducers/reducerOrder";
import { shoppingCart } from "./reducers/reducerShopingCart";
import { shops } from "./reducers/reducerShops";

const rootReducer = combineReducers({
  shops,
  shoppingCart,
  order,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
