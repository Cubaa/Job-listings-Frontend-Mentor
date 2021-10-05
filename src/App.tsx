import React, { useState } from "react";
import { MainPage } from "./Components/MainPage/MainPage";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  const [isMainPageVisible, setIsMainPageVisible] = useState<boolean>(true);

  return (
    <>
      <GlobalStyles />
      <CSSTransition
        in={isMainPageVisible}
        timeout={5000}
        classNames={"mainPage-"}
        appear={true}
      >
        <MainPageWrapper>
          <MainPage />
        </MainPageWrapper>
      </CSSTransition>
    </>
  );
}

export default App;

const MainPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f0fafb;
  &.mainPage--appear {
    opacity: 0;
  }
  &.mainPage--appear-active {
    opacity: 1;
    transition: opacity 0.5s linear;
  }
  &.mainPage--appear-done {
    opacity: 1;
  }
`;
