import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Centered=styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

function Imager() {
    let [count, setCount] = useState(0);

    var color;

  useInterval(() => {
      setCount(count + 1);
  }, 1000);

    return (
        <Centered>
          <img src="skull.png" alt="pic to enlarge" width={2*count+"px"} height={3*count+"px"}/><br/>
        </Centered>

    )
}

function App() {
  return (
      <Imager/>
  );
}

export default App;
