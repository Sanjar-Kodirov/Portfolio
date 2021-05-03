import React from 'react'
import AboutUs from './pages/AboutUs'
import GlobalStyle from './components/GlobalStyle'
import Nav  from './components/Nav'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import {Switch, Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import MovieDetail from './pages/MovieDetail'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/ourwork" exact>
          <OurWork />
        </Route>
        <Route path="/ourwork/:id">
          <MovieDetail />
        </Route>
      </Switch>      
    </BrowserRouter>
  );
}

export default App;


