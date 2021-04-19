import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Home } from "./views/Home/Home";
import { Movies } from "./views/Movies/Movies";
import { Series } from "./views/Series/Series";
import { Kids } from "./views/Kids/Kids";
import { Documentary } from "./views/Documentary/Documentary";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./views/NotFound/NotFound";

import { GlobalStyle } from "./styles/GlobalStyles";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <SearchBar />
      <Switch>
        <Route exact path={AppRoutes.home} component={Home} />
        <Route path={AppRoutes.movies} component={Movies} />
        <Route path={AppRoutes.series} component={Series} />
        <Route path={AppRoutes.kids} component={Kids} />
        <Route path={AppRoutes.documentary} component={Documentary} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};
