export type Listener = () => void;

export type Unsubscribe = () => void;

export interface Store<T> {
  readonly subscribe: (listener: Listener) => Unsubscribe;
  readonly setState: (state: T) => void;
  readonly getState: () => T;
}

export const makeStore = <T>(initialState: T): Store<T> => {
  let currentState = initialState;

  const listeners = new Set<Listener>();

  const subscribe: Store<T>["subscribe"] = (listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const setState: Store<T>["setState"] = (state: T) => {
    if (state === currentState) return;
    currentState = state;
    listeners.forEach((listener) => listener());
  };

  const getState: Store<T>["getState"] = () => currentState;

  return { subscribe, setState, getState };
};
