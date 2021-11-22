import React from "react";
import styled from "styled-components";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Text>
        Developed by{" "}
        <span style={{ color: "brown", cursor: "pointer" }}>Codelab</span> 💻
        (c) 2021
      </Text>
      <IconHolder>
        <AiFillFacebook
          style={{ fontSize: "23px", margin: "5px", cursor: "pointer" }}
        />
        <AiOutlineInstagram
          style={{ fontSize: "23px", margin: "5px", cursor: "pointer" }}
        />
        <AiOutlineTwitter
          style={{ fontSize: "23px", margin: "5px", cursor: "pointer" }}
        />
      </IconHolder>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div``;
const IconHolder = styled.div``;
