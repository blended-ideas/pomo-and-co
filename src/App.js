import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes/routes';
import Layout from './Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <div className="app-content">
            {
              routes.map((route) => (
                <Route exact={route.exact} path={route.path} key={route.id}>
                  {route.component}
                </Route>
              ))
            }
          </div>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
