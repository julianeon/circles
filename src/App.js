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

function CounterCircle() {
    let [count, setCount] = useState(0);
    let [style, setStyle] = useState("");
    let [pic, setPic] = useState("");    
    var color;

  useInterval(() => {
      setCount(count + 1);
      count % 2 === 0  ? setStyle("red") : setStyle("black")
      count % 2 === 0  ? setPic("") : setPic("url('creepy.png')")      
  }, 1000);

    return <LgCr style={{backgroundImage: pic}}><SmCr style={{backgroundColor: style}}></SmCr></LgCr>
}

const Container = styled.div`
   position: relative;
   width: 100%;
   padding-bottom: 100%;
`

const LgCr=styled.div`
   position: absolute;
   width: 40%;
   height: 40%;
   background-color: #000000;
   border-radius: 50%; 
   left: 20%;
   top: 5%;
`

const SmCr=styled.div`
  background-color: red;
  margin-top: 25%;
  margin-left: 25%;
  position: absolute;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  text-align: center;
`

function App() {
  return (
      <Container>

      <CounterCircle/>

      </Container>

  );
}

export default App;
