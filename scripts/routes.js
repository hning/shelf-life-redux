'use strict';

var React = require('react'),
    { Route, DefaultRoute } = require('react-router'),
    App = require('./App')

module.exports = (
  <Route name='main' path='/' handler={App}>
  </Route>
);
