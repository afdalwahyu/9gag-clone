import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

class Footer extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.menu} >
          <IonIcon name="md-home" size={25} color="#fff" />
          <Text style={styles.icontext}>HOME</Text>
        </View>
        <View style={styles.menu} >
          <IonIcon name="md-search" size={25} color="#fff" />
          <Text style={styles.icontext}>EXPLORE</Text>
        </View>
        <View style={styles.menu} >
          <IonIcon name="logo-youtube" size={25} color="#fff" />
          <Text style={styles.icontext}>VIDEOS</Text>
        </View>
        <View style={styles.menu} >
          <IonIcon name="md-notifications" size={25} color="#fff" />
          <Text style={styles.icontext}>NEWS</Text>
        </View>
        <View style={styles.menu} >
          <IonIcon name="md-person" size={25} color="#fff" />
          <Text style={styles.icontext}>PROFILE</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  icontext: {
    color: '#fff',
    fontSize: 10,
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Footer;
