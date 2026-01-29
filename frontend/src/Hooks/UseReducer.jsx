import React, { useReducer } from "react";

// Initial state
const initialState = {
  count: 0,
  number: 0,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { ...state, count: state.count + 1 };

    case "SET_NUMBER":
      return { ...state, number: action.payload };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const cubeNum = (num) => {
    console.log("Calculation done...");
    return Math.pow(num, 3);
  };

  const result = cubeNum(state.number);

  return (
    <div>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>
        Count++
      </button>

      <br /><br />

      <input
        type="number"
        onChange={(e) =>
          dispatch({
            type: "SET_NUMBER",
            payload: Number(e.target.value),
          })
        }
      />

      <p>Cube of the number is {result}</p>
    </div>
  );
};

export default UseReducer;
