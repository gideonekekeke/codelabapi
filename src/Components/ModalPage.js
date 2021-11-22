import React from "react";
import styled from "styled-components";
import data from "./DataBase.json";
import { MdCancel } from "react-icons/md";

const ModalPage = ({ show, onShow }) => {
  return (
    <>
      {show ? (
        <Container>
          <Modal>
            <IconHolder>
              <Text>How to use on Different Languages?</Text>
              <div>
                <MdCancel
                  onClick={onShow}
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
              </div>
            </IconHolder>
            <Desc>
              Codelab Rest api is a free online api, that can be use for ant
              type of web project you want to build. and also in JSON format..
              you can check how to use it on different languages below.{" "}
            </Desc>
            <NodeHolder>
              <NodeText>
                How to use on <span style={{ color: "brown" }}>(Node)</span>
                axios
              </NodeText>
              <NodeBox> {data[0].node}</NodeBox>
            </NodeHolder>
            <NodeHolder>
              <NodeText>
                How to use on <span style={{ color: "brown" }}>(php)</span>Http
              </NodeText>
              <NodeBox> {data[1].php}</NodeBox>
            </NodeHolder>
            <NodeHolder>
              <NodeText>
                How to use on <span style={{ color: "brown" }}>(C#)</span>
                HttpClient
              </NodeText>
              <NodeBox> {data[2].c}</NodeBox>
            </NodeHolder>
            <NodeHolder>
              <NodeText>
                How to use on <span style={{ color: "brown" }}>(Java)</span>
                AsyncHttp
              </NodeText>
              <NodeBox> {data[3].java}</NodeBox>
            </NodeHolder>
          </Modal>
        </Container>
      ) : null}
    </>
  );
};

export default ModalPage;

const IconHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NodeHolder = styled.div`
  margin-top: 30px;
`;
const NodeText = styled.div``;
const NodeBox = styled.div`
  height: 150px;
  width: 80%;
  background-color: #39374e;
  border-radius: 5px;
  /* overflow-y: scroll; */
  padding: 10px;
  color: lightcoral;
  @media screen and (max-width: 760px) {
    width: 100%;
    overflow-y: scroll;
  }
`;

const Desc = styled.div`
  font-size: 15px;
  margin-top: 10px;
`;

const Text = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: brown;
`;

const Container = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background: red; */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 250, 250, 0.1);
  backdrop-filter: blur(1px);
`;

const Modal = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  height: 700px;
  width: 700px;
  background-color: #f5f5f5;
  z-index: 10;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 5px 7px -1px rgba(0, 0, 0, 0.35);
  padding: 30px;
  overflow-y: scroll;

  @media screen and (max-width: 760px) {
    height: 500px;
    width: 320px;
  }
`;
