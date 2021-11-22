import React from "react";
import translate from "translate-api";

const Converting = () => {
  const translating = () => {
    let transUrl = "https://nodejs.org/en/";
    translate.getPage(transUrl).then(function (htmlStr) {
      console.log(htmlStr.length);
    });
    let transText = "hello world!";
    translate.getText(transText, { to: "zh-CN" }).then(function (text) {
      console.log(text);
    });
  };

  return <div>cvghjkf</div>;
};

export default Converting;
