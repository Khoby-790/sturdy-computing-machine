export type StoreAction<T = any> = { type: string, payload?: T };

export type StoreReducer<T = any> = (state: any, action: StoreAction<T>) => any;

function createStore(reducer: StoreReducer, initialState: any) {
    let state = initialState;
    let listeners: Function[] = [];

    const getState = () => state;

    const dispatch = (action: StoreAction) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener(state));
    };

    const subscribe = (listener: Function) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    dispatch({} as StoreAction);

    return { getState, dispatch, subscribe };
}




// console.log(store.getState());

export default createStore;