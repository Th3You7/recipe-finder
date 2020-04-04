import React from "react";
import NavBar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import CardInfo from "./components/main/CardInfo";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const bg = location.state && location.state.bg;
  return (
    <div className="App">
      <Switch location={bg}>
        <Route path="/">
          <NavBar />
          <Main />
        </Route>
      </Switch>

      {bg && (
        <Route>
          <CardInfo />
        </Route>
      )}
    </div>
  );
}

export default App;
