'use strict';

var React = require('react'),
    DocumentTitle = require('react-document-title'),
    { RouteHandler } = require('react-router'),
    { PropTypes } = React;

var App = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired,
    query: PropTypes.object.isRequired
  },

  render() {
    return (
      <DocumentTitle title='Sample App'>
        <div className='App'>
          <p> There's nothing here </p>
          <RouteHandler {...this.props} />
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;