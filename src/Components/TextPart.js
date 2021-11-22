import React from "react";
import styled from "styled-components";
const TextPart = () => {
  return (
    <Container>
      <BoldText>Are you tired of outsourcing api online?</BoldText>
      <BoldText2>
        Didn't you find the right api to use for your project?
      </BoldText2>
      <Content>
        Codelab is a free online Rest Api that you can use whenever you need
        Pseudo-real data for your e-commerce, shopping etc. website without
        running any server-side code. its awesome for teaching purposes, simple
        codes, tests, etc.{" "}
      </Content>
    </Container>
  );
};

export default TextPart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 30px;
  @media screen and (max-width: 760px) {
    margin-top: 0;
  }
`;
const BoldText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const BoldText2 = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  text-align: center;
  width: 700px;
  font-weight: 200;

  @media screen and (max-width: 760px) {
    width: 320px;
    text-align: left;
  }
`;
