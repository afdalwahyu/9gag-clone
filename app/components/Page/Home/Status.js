import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Status extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text} >{`${this.props.points} Points ${this.props.comments} Comments`}</Text>
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
  text: {
    fontSize: 13,
  },
});

export default Status;
