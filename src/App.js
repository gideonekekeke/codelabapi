import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import HeaderView from "./Components/HeaderView";
// import Converting from "./Components/Converting";

function App() {
  return (
    <>
      <Router>
        <HeaderView />
        <Switch>
          {/* <Converting /> */}
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
