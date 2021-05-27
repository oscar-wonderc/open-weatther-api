import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Weather from "./pages/Weather";

import Header from "./components/header/Header";

function App(): JSX.Element {
  if (!localStorage.getItem("cities")) {
    localStorage.setItem("cities", "");
  }

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/">
            <Weather />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
