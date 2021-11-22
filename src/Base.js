import firebase from "firebase";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDICNn717ZbaPSMcko_R5--3PSq2wM5vSE",
  authDomain: "codelabapis.firebaseapp.com",
  projectId: "codelabapis",
  storageBucket: "codelabapis.appspot.com",
  messagingSenderId: "641330584320",
  appId: "1:641330584320:web:e79bc3ac7d447257db31e5",
});

//  fetch(`https://apibuilds.herokuapp.com
//  /api/blogs`)
//    .then((response) => response.json())
//   .then((data) => console.log(data));

// var axios = require("axios").default;
//  var options = {method: 'GET',
//    url:`https://apibuilds.herokuapp.com
//    /api/blogs`,};
// axios.get(options).then(function
//   (response) { 	console.log(response.data);})
//   .catch(function (error)
//    {console.error(error);})

//   <?php
//    $curl = curl_init();
//     curl_setopt_array($curl, [ 	CURLOPT_URL => "https://codelabfood.herokuapp.com/api/foods",   ]);  $response = curl_exec($curl); $err = curl_error($curl);  curl_close($curl);  if ($err) { 	echo "cURL Error #:" . $err; } else { 	echo $response; }
