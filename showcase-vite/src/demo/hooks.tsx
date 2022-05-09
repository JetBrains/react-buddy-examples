import {MouseEvent, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState} from "react";
import {ThemeContext} from "../main";

const initialState = {count: 0};

type Action = {type: 'increment' | 'decrement'};
type ReducerState = {count: number};

export const HooksDemoComponent = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch('https://api');
  }, []);

  const theme = useContext(ThemeContext);

  const [reducerState, dispatch] = useReducer(reducer, initialState);

  const memoizedCallback = useCallback<()=>number>(
    () => {
      return sum(counter, reducerState);
    },
    [counter, reducerState],
  );

  const memoizedValue = useMemo<number>(
    () => {
      return sum(counter, reducerState);
    },
    [counter, reducerState],
  );

  const buttonEl = useRef<HTMLButtonElement>(null);

  useCustomHook();


  function onButtonClick(event: MouseEvent<HTMLButtonElement>) {
    setCounter(counter => counter + 1);
  }

  const onButtonRefClick = () => {
    // `current` points to the mounted text input element
    console.log(buttonEl?.current?.offsetTop);
  };

  return (
    <div>
      <h1>Hooks Demo</h1>
      <h2>useState()</h2>
      <div>
        Counter: {counter} <button onClick={onButtonClick}>+</button>
      </div>
      <h2>useContext()</h2>
      <div>
        <button style={{ background: theme.background, color: theme.foreground }}>
          I am styled by theme context!
        </button>
      </div>
      <h2>useReducer()</h2>
      <div>
        Count: {reducerState.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>
      <h2>useCallback()</h2>
      <b>{memoizedCallback()}</b>

      <h2>useMemo()</h2>
      <b>{memoizedValue}</b>

      <h2>useRef()</h2>
      <button ref={buttonEl} onClick={onButtonRefClick}>toggle color</button>
    </div>
  )
}

function reducer(state: ReducerState, action: Action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function sum(a: number, b: ReducerState):number {
  return a + b.count;
}

function useCustomHook() {

}