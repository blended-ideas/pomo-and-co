import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes/routes';
import Layout from './Layout/Layout';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <div className="app-content">
            <Switch>
              {
                routes.map((route) => (
                  <Route exact={route.exact} path={route.path} key={route.id}>
                    {route.component}
                  </Route>
                ))
              }
            </Switch>
          </div>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
