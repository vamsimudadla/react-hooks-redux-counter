import React from "react";
import { connect } from "react-redux";

import { incrementCount, decrementCount } from "../../actions";

import { Button, Container, CounterText } from "./styledComponents";

interface Props {
  count: number;
  incrementCount: (count: number) => void;
  decrementCount: (count: number) => void;
}

function ReduxContainer(props: Props) {
  function onClickPlus() {
    props.incrementCount(props.count);
  }

  function onClickMinus() {
    props.decrementCount(props.count);
  }

  return (
    <Container>
      <Button onClick={onClickPlus}>+</Button>
      <CounterText>{`Count ${props.count}`}</CounterText>
      <Button onClick={onClickMinus}>-</Button>
    </Container>
  );
}

const mapStateToProps = (state: any) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    incrementCount: (count: number) => {
      dispatch(incrementCount(count));
    },
    decrementCount: (count: number) => {
      dispatch(decrementCount(count));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxContainer);
