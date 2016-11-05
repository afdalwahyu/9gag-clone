import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class CatTitle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.name}</Text>
        <Text style={styles.button}>See All</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 2,
    marginRight: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  title: {
    color: '#000',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  button: {
    color: '#0099FF',
    marginRight: 5,
    fontWeight: 'bold',
  },
});

export default CatTitle;
