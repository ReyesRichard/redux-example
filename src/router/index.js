import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Spinner from  '../components/Spinner'
import Menu from  '../components/Menu'

// Containers
const Home =  lazy(() => import('../containers/Home'));
const Contacto =  lazy(() => import('../containers/Contacto'));
const Blog =  lazy(() => import('../containers/Blog'));

export default function App() {
    return (
      <Router>
        <div>
          
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Menu />  
            <Switch>
                <Suspense fallback={<Spinner />}>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/contacto">
                        <Contacto />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Suspense>
            </Switch>
        </div>
      </Router>
    );
}
 