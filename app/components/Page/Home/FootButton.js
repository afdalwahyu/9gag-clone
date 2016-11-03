import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import MIcon from 'react-native-vector-icons/MaterialIcons';


class FootButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftcontainer}>
          <View style={[styles.button, { marginLeft: 10 }]}>
            <MIcon name="thumb-up" size={20} color="#696969" />
          </View>
          <View style={styles.button}>
            <MIcon name="thumb-down" size={20} color="#696969" />
          </View>
          <View style={styles.button}>
            <MIcon name="mode-comment" size={20} color="#696969" />
          </View>
          <View style={styles.reportbutton}>
            <MIcon name="more-vert" size={20} color="#696969" />
          </View>
        </View>
        <View style={styles.rightcontainer}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }} >SHARE</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
  },
  leftcontainer: {
    flexDirection: 'row',
  },
  rightcontainer: {
    backgroundColor: '#0099FF',
    borderColor: '#0099FF',
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 7,
    paddingTop: 7,
    marginBottom: 10,
    marginLeft: 4,
    marginRight: 10,
  },
  button: {
    borderColor: '#d8d8d8',
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 7,
    paddingTop: 7,
    marginBottom: 10,
    marginLeft: 4,
    marginRight: 4,
  },
  reportbutton: {
    paddingTop: 3,
    paddingLeft: 6,
  },
});

export default FootButton;
