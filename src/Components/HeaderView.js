import React from "react";
import styled from "styled-components";
import ModalPage from "./ModalPage";
import { Link } from "react-router-dom";

const HeaderView = () => {
  const [show, setShow] = React.useState(false);

  const onShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Bar>
        {" "}
        Welcome to codelab free api. over 30+ developers trained in codelab
      </Bar>
      <Container>
        <LogoName>CODELAB.API</LogoName>
        <Mainholder>
          {" "}
          <Link to="/">
            <FirstText>Home</FirstText>
          </Link>
          <Second onClick={onShow}>Docs</Second>
          <a href="https://github.com/gideonekekeke?tab=repositories">
            <Third>GitHub</Third>
          </a>
        </Mainholder>
        <ModalPage onShow={onShow} show={show} />
        <Sign>Create an Account</Sign>
      </Container>
    </>
  );
};

export default HeaderView;

const Bar = styled.div`
  height: 30px;
  align-items: center;
  width: 100%;
  background-color: brown;
  justify-content: center;
  display: flex;
  color: white;
  font-size: 13px;

  @media screen and (max-width: 760px) {
    text-align: center;
    height: 40px;
    /* font-size: 11px; */
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 70px;
  align-items: center;
  width: 100%;
  /* background-color: #2deae0; */
`;
const LogoName = styled.div`
  font-weight: bold;
`;
const FirstText = styled.div`
  :hover {
    color: brown;
    cursor: pointer;
  }
`;
const Second = styled.div`
  :hover {
    color: brown;
    cursor: pointer;
  }
`;
const Sign = styled.div`
  height: 40px;
  width: 200px;
  background-color: brown;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const Third = styled.div`
  :hover {
    color: brown;
    cursor: pointer;
  }
`;
const Mainholder = styled.div`
  display: flex;
  /* background-color: red; */
  width: 300px;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 760px) {
    width: 160px;
    /* padding: 10px; */
  }
`;
