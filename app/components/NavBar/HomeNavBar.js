import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class HomeNavBar extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title} >9GAG</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 50,
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeNavBar;
