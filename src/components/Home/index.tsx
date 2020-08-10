import React from "react";
import { withRouter } from "react-router-dom";

import { navigateToCounterPage } from "../../Navigations";

import { Container, CounterLinkText, Wrapper } from "./styledComponents";

interface Props {
  history: any;
}

function Home(props: Props) {
  return (
    <Container>
      <span>Welcome Home...</span>
      <Wrapper>
        <span>Click on link,</span>
        <CounterLinkText
          onClick={() => {
            navigateToCounterPage(props.history);
          }}
        >
          Counter
        </CounterLinkText>
      </Wrapper>
    </Container>
  );
}

export default withRouter(Home);
