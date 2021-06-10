import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./views/Home/Home";
import { Movies } from "./views/Movies/Movies";
import { Series } from "./views/Series/Series";
import { Kids } from "./views/Kids/Kids";
import { Documentary } from "./views/Documentary/Documentary";
import { Footer } from "./components/Footer/Footer";
import { ShowMovieDetails } from "./views/ShowMovieDetails/ShowMovieDetails";
import { NotFound } from "./views/NotFound/NotFound";
import { Feed } from "./views/Feed/Feed";

import { Faq } from "./views/Faq/Faq";
import { CookiePolicy } from "./views/Cookie/CookiePolicy";
import { PrivacyPolicy } from "./views/Privacy/PrivacyPolicy";
import { UserAgreement } from "./views/UserAgreement/UserAgreement";
import { About } from "./views/About/About";

import { GlobalStyle } from "./styles/GlobalStyles";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import UseScrollToTop from './components/ScrollToTop/ScrollToTop'

const queryClient = new QueryClient();

export const App = () => {
  const [signup, setSignup] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <UseScrollToTop />
        <NavBar useQuery={useQuery} signup={signup} setSignup={setSignup} />
        <Switch>
          <Route
            exact
            path={AppRoutes.home}
            component={() => (
              <Home signup={signup} setSignup={setSignup} useQuery={useQuery} />
            )}
          />
          <Route
            path={AppRoutes.movies}
            component={() => <Movies useQuery={useQuery} />}
          />
          <Route
            path={AppRoutes.series}
            component={() => <Series useQuery={useQuery} />}
          />
          <Route
            path={AppRoutes.kids}
            component={() => <Kids useQuery={useQuery} />}
          />
          <Route
            path={AppRoutes.feed}
            component={() => <Feed useQuery={useQuery} />}
          />

          <Route path={AppRoutes.faq} component={() => <Faq />} />
          <Route path={AppRoutes.cookies} component={() => <CookiePolicy />} />
          <Route path={AppRoutes.policy} component={() => <PrivacyPolicy />} />
          <Route path={AppRoutes.eula} component={() => <UserAgreement />} />

          <Route path={AppRoutes.about} component={() => <About />} />

          <Route
            path={AppRoutes.documentary}
            component={() => <Documentary useQuery={useQuery} />}
          />
          <Route path={AppRoutes.show} component={ShowMovieDetails} />
          <Route path="*" component={NotFound} />
        </Switch>       
        <Footer />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
