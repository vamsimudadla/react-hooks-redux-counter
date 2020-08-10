import React, { useState, useEffect } from "react";

import { Button, Container, CounterText } from "./styledComponents";

function HooksCounter() {
  const [count, setCount] = useState(0);

  function onClickPlus() {
    setCount(count + 1);
  }

  function onClickMinus() {
    setCount(count - 1);
  }

  useEffect(() => {
    console.log("effect");
    return function cleanup() {
      console.log("cleanup");
    };
  }, []);

  return (
    <Container>
      <Button onClick={onClickPlus}>+</Button>
      <CounterText>{`Count ${count}`}</CounterText>
      <Button onClick={onClickMinus}>-</Button>
    </Container>
  );
}

export default HooksCounter;
