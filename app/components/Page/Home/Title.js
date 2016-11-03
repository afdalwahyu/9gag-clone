import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Title extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title} >{ this.props.title }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 17,
  },
});

export default Title;
