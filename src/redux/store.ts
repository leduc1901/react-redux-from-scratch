import { reducer } from "./reducer";
import { InitialState, initialState } from "./state";

let listeners: any[] = [];

function createStore(reducer: any, initialState: InitialState) {
  let state = initialState;

  function getState() {
    return state;
  }

  function dispatch(action: any) {
    state = reducer(state, action);

    emitChange();
  }

  function subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  const store = {
    dispatch,
    getState,
    subscribe,
  };

  return store;
}

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export const store = createStore(reducer, initialState);
