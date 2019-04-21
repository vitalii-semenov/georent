
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>

        <h1>This is GeoRent Start Page.  Please Insert Components here:</h1>
      </div>
    );
  }
}
