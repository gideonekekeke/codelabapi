import React from "react";
import Footer from "./Footer";
import HeroPart from "./HeroPart";
import MainBuild from "./MainBuild";
import TextPart from "./TextPart";

const HomeScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <HeroPart />
      <TextPart />
      <MainBuild />
      <Footer />
    </div>
  );
};

export default HomeScreen;
