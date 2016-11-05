import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Featured extends Component {
  render() {
    return (
      <View>
        <View style={styles.container} >
          <Text>just 1 feature to show</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.text}>SECTIONS</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bad455',
    height: 200,
  },
  bottom: {
    height: 60,
    backgroundColor: '#E4E4E4',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
    color: '#b7b7b7',
  },
});

export default Featured;
