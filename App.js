import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Store from './app/redux/Store';
import { connect } from 'react-redux';
import Home from './app/screens/Home';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Home />
      </Provider>
    );
  }
}