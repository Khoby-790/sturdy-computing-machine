export declare type StoreAction<T = any> = {
    type: string;
    payload?: T;
};
export declare type StoreReducer<T = any> = (state: any, action: StoreAction<T>) => any;
declare function createStore(reducer: StoreReducer, initialState: any): {
    getState: () => any;
    dispatch: (action: StoreAction) => void;
    subscribe: (listener: Function) => () => void;
};
export default createStore;
