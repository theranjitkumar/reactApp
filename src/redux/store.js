import { createStore } from "redux";

// Action
const increaseAction = { type: 'increase' }
// Reducer
var counter = function (state, action) {
    if (action.type = "increase") {
        return action.payload;
    }
    return state
}
// Store
const store = createStore(counter);

store.subscribe(() => {
    console.log("now store is: " + store.getState());
});

store.dispatch({ type: "increase", payload: 3 });
store.dispatch({ type: "increase", payload: 6 });

export default store;