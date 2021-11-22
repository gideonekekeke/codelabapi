import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { app } from "../Base";

const db = app.firestore().collection("Codelapapi");
const MainBuild = () => {
  const [data, setData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [musicApi, setMusicApi] = useState([]);
  const [blogApi, setBlogApi] = useState([]);

  const [firstData, setFirstData] = useState(false);
  const [secondData, setSecondData] = useState(false);
  const [thirdData, setThirdData] = useState(false);
  const [fourth, setFouth] = useState(false);
  const [fifth, setFifth] = useState(false);

  const handleEcomerce = () => {
    setFirstData(true);
    setSecondData(false);
    // setThirdData(false);
  };

  const handleMovie = () => {
    setFirstData(false);
    setSecondData(true);
    // setThirdData(false);
  };

  const handleFood = () => {
    setFirstData(false);
    setSecondData(false);
    setThirdData(true);
  };
  const handleMusic = () => {
    setFirstData(false);
    setSecondData(false);
    setThirdData(false);
    setFouth(true);
  };

  const handleBlog = () => {
    setFirstData(false);
    setSecondData(false);
    setThirdData(false);
    setFouth(false);
    setFifth(true);
  };

  const getData = async () => {
    await app
      .firestore()
      .collection("Codelapapi")
      .orderBy("ecomerce")
      .onSnapshot((snap) => {
        const i = [];
        snap.forEach((doc) => {
          i.push({ ...doc.data(), id: doc.id });
        });
        setData(i);
      });
  };
  const gettingblog = async () => {
    await app
      .firestore()
      .collection("Codelapapi")
      .orderBy("blog")
      .onSnapshot((snap) => {
        const i = [];
        snap.forEach((doc) => {
          i.push({ ...doc.data(), id: doc.id });
        });
        setBlogApi(i);
      });
  };
  const gettingMusic = async () => {
    await app
      .firestore()
      .collection("Codelapapi")
      .orderBy("music")
      .onSnapshot((snap) => {
        const i = [];
        snap.forEach((doc) => {
          i.push({ ...doc.data(), id: doc.id });
        });
        setMusicApi(i);
      });
  };

  const gettingMovies = async () => {
    await app
      .firestore()
      .collection("Codelapapi")
      .orderBy("movie")
      .onSnapshot((snap) => {
        const i = [];
        snap.forEach((doc) => {
          i.push({ ...doc.data(), id: doc.id });
        });
        setMovieData(i);
      });
  };
  const gettingFoods = async () => {
    await app
      .firestore()
      .collection("Codelapapi")
      .orderBy("food")
      .onSnapshot((snap) => {
        const i = [];
        snap.forEach((doc) => {
          i.push({ ...doc.data(), id: doc.id });
        });
        setFoodData(i);
      });
  };

  useEffect(() => {
    getData();
    gettingMovies();
    gettingFoods();
    gettingMusic();
    gettingblog();
    console.log("thifdhdj", data);
  }, []);

  return (
    <Container>
      <FirstComp>
        <span style={{ fontWeight: "bold", fontSize: "17px" }}>
          {" "}
          Categories
        </span>
        <ListHolder>
          <List1 onClick={handleEcomerce}> E-commerce api</List1>
          <List2 onClick={handleMovie}> Movie api</List2>
          <List2 onClick={handleBlog}> Blog api</List2>
          <List4 onClick={handleFood}>Food api</List4>
          <List4 onClick={handleMusic}>Music api</List4>
          <List3>Travel api</List3>
          <List4>Sports api</List4>
          <List4>Car api</List4>
          <List4>Game api</List4>
          <List4>Education api</List4>
          <List4>Health api</List4>
        </ListHolder>
      </FirstComp>
      <SecondComp>
        <span style={{ fontWeight: "bold", fontSize: "17px" }}> Routes</span>
        <Box>
          <ConentHolder>
            <span>Get</span>
            <span>Post</span>
            <span>Patch</span>
            <span>Delete</span>
          </ConentHolder>
          {firstData ? (
            <>
              {data.map((props) => (
                <Text key={props.id}>{props.reactg}</Text>
              ))}
            </>
          ) : secondData ? (
            <>
              {movieData.map((props) => (
                <Text key={props.id}>{props.reactg}</Text>
              ))}
            </>
          ) : thirdData ? (
            <>
              {foodData.map((props) => (
                <Text key={props.id}>{props.reactg}</Text>
              ))}
            </>
          ) : fourth ? (
            <>
              {musicApi.map((props) => (
                <Text key={props.id}>{props.reactg}</Text>
              ))}
            </>
          ) : fifth ? (
            <>
              {blogApi.map((props) => (
                <Text key={props.id}>{props.reactg}</Text>
              ))}
            </>
          ) : (
            <>
              {data.map((props) => (
                <Text key={props.id}>{props.reactg}</Text>
              ))}
            </>
          )}
        </Box>
      </SecondComp>
      <ThirdComp>
        {" "}
        <span style={{ fontWeight: "bold", fontSize: "17px" }}> Language</span>
        <Box>
          <ConentHolder>
            <span style={{ cursor: "pointer" }}>Node</span>
            <span style={{ cursor: "pointer" }}>Php</span>
            <span style={{ cursor: "pointer" }}>Swift</span>
            <span style={{ cursor: "pointer" }}>Vue js</span>
          </ConentHolder>
          {firstData ? (
            <>
              {data.map((props) => (
                <Text key={props.id}>{props.nodeLang}</Text>
              ))}
            </>
          ) : secondData ? (
            <>
              {movieData.map((props) => (
                <Text key={props.id}>{props.nodeLang}</Text>
              ))}
            </>
          ) : thirdData ? (
            <>
              {foodData.map((props) => (
                <Text key={props.id}>{props.nodeLang}</Text>
              ))}
            </>
          ) : fourth ? (
            <>
              {musicApi.map((props) => (
                <Text key={props.id}>{props.nodeLang}</Text>
              ))}
            </>
          ) : fifth ? (
            <>
              {blogApi.map((props) => (
                <Text key={props.id}>{props.nodeLang}</Text>
              ))}
            </>
          ) : (
            <>
              {data.map((props) => (
                <Text key={props.id}>{props.nodeLang}</Text>
              ))}
            </>
          )}
        </Box>
      </ThirdComp>
    </Container>
  );
};

export default MainBuild;

const Text = styled.div`
  margin: 10px;
  /* margin-top: 20px; */
  /* font-weight: bold; */
  color: black;

  line-height: 170%;
  color: brown;
`;

const ConentHolder = styled.div`
  background-color: #39374e;
  justify-content: space-around;
  display: flex;
  color: white;

  :hover$(span) {
    background-color: red;
  }
`;

const Box = styled.div`
  height: 250px;
  width: 390px;
  background-color: #f5f5f5;
  box-shadow: 0px 5px 7px -1px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  color: brown;

  @media screen and (max-width: 760px) {
    margin: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  /* align-items: center; */
  margin-top: 50px;
  color: black;
  padding-bottom: 30px;
  /* flex-wrap: wrap; */

  @media screen and (max-width: 760px) {
    overflow-x: scroll;
    display: flexbox;
    /* margin: 10px; */
  }
`;
const FirstComp = styled.div`
  /* font-weight: bold; */
`;
const SecondComp = styled.div``;
const ThirdComp = styled.div``;
const ListHolder = styled.div``;
const List1 = styled.div`
  margin-top: 10px;
  color: #39374e;
  :hover {
    color: brown;
    cursor: pointer;
  }
`;
const List2 = styled.div`
  margin-top: 5px;
  color: #39374e;
  :hover {
    color: brown;
    cursor: pointer;
  }
`;
const List3 = styled.div`
  margin-top: 5px;
  color: #39374e;
  :hover {
    color: brown;
    cursor: pointer;
  }
`;
const List4 = styled.div`
  margin-top: 5px;
  color: #39374e;
  :hover {
    color: brown;
    cursor: pointer;
  }
`;
