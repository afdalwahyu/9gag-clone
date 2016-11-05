import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

// import page package
import Home from './components/Page/Home';
import Explore from './components/Page/Explore';

import Footer from './components/Footer';


class index extends Component {

  render() {
    return (
      <View style={styles.container} >
        <Home />
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
