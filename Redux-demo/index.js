const redux = require("redux"); //importing redux
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOKED = "CAKE_RESTOKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOKED = "ICECREAM_RESTOKED";

//action creator for cakes
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restokedCake(qty = 1) {
  return {
    type: CAKE_RESTOKED,
    payload: qty,
  };
}

//actions creators for ice cream
function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restokedIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOKED,
    payload: qty,
  };
}

//initial state
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceCream: 10,
// };

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCream: 20,
};

//reducer function
const reducerCake = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const reducerIceCream = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    case ICECREAM_RESTOKED:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream + action.payload,
      };
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1
      }
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  cake: reducerCake,
  iceCream: reducerIceCream,
});

const store = createStore(rootReducers); //creating store
console.log("intialState", store.getState()); //using getState method

const unsubscribe = store.subscribe(() => {
  console.log('updated state', store.getState())
});

// store.dispatch(orderCake()); //dispatch method
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restokedCake(3));

const actions = bindActionCreators(
  { orderCake, restokedCake, orderIceCream, restokedIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restokedCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restokedIceCream(3);

unsubscribe();
