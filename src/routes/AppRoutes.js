import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PageNotFound from 'components/error/PageNotFound';
import { connect } from 'react-redux';
// ROUTES
import { ROUTES } from './Routes';

const AppRoutes = props => {
  const { isUserLoggedIn } = props.Auth;

  return (
    <Suspense fallback={'Loading please wait...'}>
      <Switch>
        {ROUTES?.map((route, index) => {
          if (route.isPrivate) {
            return route.component ? (
              <Route
                exact
                key={index}
                name={route.name}
                path={route.path}
                render={props =>
                  isUserLoggedIn ? (
                    <route.component {...props} />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
            ) : null;
          }
          return route.component ? (
            <Route
              exact
              key={index}
              name={route.name}
              path={route.path}
              render={props => <route.component {...props} />}
            />
          ) : null;
        })}

        <Redirect exact path="/home" to="/" />
        <Route path="*" name="Not Found" render={() => <PageNotFound />} />
      </Switch>
    </Suspense>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(AppRoutes);
