import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import Spinner from  'Components/Spinner'
import Menu from  'Components/Menu'
import {PrivateRoute} from  './privateRouter'
// import store from  'store'

// Containers
const Home =  lazy(() => import('Containers/Home'));
const Contacto =  lazy(() => import('Containers/Contacto'));
const Blog =  lazy(() => import('Containers/Blog'));
const Login =  lazy(() => import('Containers/Login'));
const Counter =  lazy(() => import('Containers/Contador'));

export default function App({store}) {
    return (
      <Provider store={store}>
                  
        <Router>
          <div>
            
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
              <Menu />  
              <Switch>
              
                  <Suspense fallback={<Spinner />}>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <PrivateRoute exact path="/blog">
                          <Blog />
                      </PrivateRoute>
                      <Route exact path="/contacto">
                          <Contacto />
                      </Route>
                      <Route exact path="/login">
                          <Login />
                      </Route>
                      <Route exact path="/contador">
                          <Counter />
                      </Route>
                  </Suspense>
              </Switch>
          </div>
        </Router>
      </Provider>
    );
}
 