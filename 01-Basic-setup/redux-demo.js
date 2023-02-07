// default node JS import syntax for importing third party packages
const redux = require('redux');

// reducer function--> INPUT: old state+dispatched action: OUTPUT: new state object
// below we intialize state with default value since for 1st time there will be no initial state, hence this default state will be used else the initial one
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment') {
        console.log('new state increment');
        return {
            counter: state.counter + 1,
        };
    }
    if(action.type === 'decrement') {
        console.log('new state decrement');
        return {
            counter: state.counter - 1,
        };
    }
    console.log('unchanged state');
    return state;
};

// creating central data store
const store = redux.createStore(counterReducer);

console.log('state of store ' + store.getState());

// subscriber to store
const counterSubscriber = () => {
    // getState gives latest state snapshot
    const latestState = store.getState();
    console.log(latestState);
};

// making react aware about subscribe function and excute when state changes
store.subscribe(counterSubscriber);

// dispatch is a method, it dispatches an action (action is a JS object)
// this below dispatch function dispatched new action which cause reducer function to run again
store.dispatch({ type: 'increment',});
store.dispatch({ type: 'decrement' });