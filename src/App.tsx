import React, { FC, useRef } from "react";
import { MainPage } from "./Components/MainPage/MainPage";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export const App: FC = () => {
  const mainPageWrapper = useRef<HTMLElement | null>(null);
  return (
    <>
      <GlobalStyles />
      <CSSTransition
        in={true}
        timeout={5000}
        classNames={"mainPage-"}
        appear={true}
        nodeRef={mainPageWrapper}
      >
        <MainPageWrapper ref={mainPageWrapper}>
          <MainPage />
        </MainPageWrapper>
      </CSSTransition>
    </>
  );
};

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
