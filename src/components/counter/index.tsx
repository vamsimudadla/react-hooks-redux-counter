import React from "react";

import HooksCounter from "../HooksCounter";
import ReduxCounter from "../ReduxCounter";

import {
  Container,
  HooksContainer,
  Text,
  ReduxContainer,
} from "./styledComponents";

function Counter() {
  return (
    <Container>
      <HooksContainer>
        <Text>HooksCounter</Text>
        <HooksCounter />
      </HooksContainer>
      <ReduxContainer>
        <Text>ReduxCounter</Text>
        <ReduxCounter />
      </ReduxContainer>
    </Container>
  );
}

export default Counter;
