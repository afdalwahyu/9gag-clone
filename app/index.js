import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Content from './components/Page/Home';
import Footer from './components/Footer';
import HomeNavBar from './components/NavBar/HomeNavBar'

class index extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Content />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default index;
