import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

class Featured extends Component {
  render() {
    return (
      <Text style={styles.container} >
        just 1 feature to show
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Featured;
