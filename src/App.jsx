import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./views/Home/Home";
import { Movies } from "./views/Movies/Movies";
import { Series } from "./views/Series/Series";
import { Kids } from "./views/Kids/Kids";
import { Documentary } from "./views/Documentary/Documentary";
import { NotFound } from "./views/NotFound/NotFound";

import { GlobalStyle } from "./styles/GlobalStyles";

const appRoutes = {
  home: "/",
  movies: "/movies",
  series: "/series",
  kids: "/kids",
  documentary: "/documentary",
};

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={appRoutes.home} component={Home} />
        <Route path={appRoutes.movies} component={Movies} />
        <Route path={appRoutes.series} component={Series} />
        <Route path={appRoutes.kids} component={Kids} />
        <Route path={appRoutes.documentary} component={Documentary} />
        <Route path="*" component={NotFound} />
        <GlobalStyle />
      </Switch>
    </Router>
  );
};
