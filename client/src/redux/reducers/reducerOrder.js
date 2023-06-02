const InitialState = {
  orders: [],
};

export const order = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_ORDERS": {
      return {
        ...state,
        orders: action.payload || [],
      };
    }
    case "ADD_NEW_ORDER": {
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };
    }
    default:
      return state;
  }
};
