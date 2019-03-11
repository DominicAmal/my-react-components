/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from 'components/Navbar';
import LoadingIndicator from 'components/LoadingIndicator';
import './style.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Helmet>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Navbar />
        <section>
          <h2>Loading Indicator</h2>
          <LoadingIndicator />
        </section>
        <section />
      </div>
    );
  }
}
