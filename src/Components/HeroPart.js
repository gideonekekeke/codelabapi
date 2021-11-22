import React from "react";
import styled from "styled-components";
import pic from "../img/3.svg";
import { AiFillGithub } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import ModalPage from "./ModalPage";

const HeroPart = () => {
  const [show, setShow] = React.useState(false);

  const onShow = () => {
    setShow(!show);
  };

  return (
    <Container>
      <TextHolder>
        <BoldText> Get Free Codelab api</BoldText>
        <Content>
          Codelab is a coding academy in ajegunle that train youths in ajegunle
          to become software developers.
          <span style={{ color: "brown", cursor: "pointer" }}>
            Over 30+ developers
          </span>
        </Content>
        <ButtonHolder>
          <Github>
            View on Github <AiFillGithub style={{ marginLeft: "10px" }} />
          </Github>
          <Read onClick={onShow}>
            Read Docs <BiBookAlt style={{ marginLeft: "10px" }} />
          </Read>
          <ModalPage onShow={onShow} show={show} />
        </ButtonHolder>
      </TextHolder>
      <ImageHolder src={pic} />
    </Container>
  );
};

export default HeroPart;

const ButtonHolder = styled.div`
  display: flex;
  /* width: 300px; */
  /* justify-content: space-between; */
  margin-top: 10px;
  flex-wrap: wrap;
`;
const Read = styled.div`
  height: 40px;
  width: 200px;
  /* background-color: #39374e; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 5px;
  margin-left: 15px;
  border: 1px solid #39374e;

  :hover {
    cursor: pointer;
    background-color: #39374e;
    color: white;
  }

  @media screen and (max-width: 600px) {
    margin-left: 0;
    margin-top: 7px;
  }
`;
const Github = styled.div`
  height: 40px;
  width: 200px;
  background-color: brown;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const BoldText = styled.div`
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;

const Content = styled.div`
  width: 500px;
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;
const TextHolder = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;

    flex-direction: column;
  }
`;
const ImageHolder = styled.img`
  height: 500px;
  width: 700px;

  @media screen and (max-width: 600px) {
    width: 320px;
    height: 320px;
  }
  /* background-color: red; */
`;
