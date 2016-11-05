import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

class Categories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  getEachLength() {
    return this.state.width / 4;
  }

  calculateWH(event) {
    const { width, height } = event.nativeEvent.layout;
    this.setState({
      width,
      height,
    });
  }

  render() {
    return (
      <View
        style={[styles.container, { height: this.getEachLength() }]}
        onLayout={event => this.calculateWH(event)}
      >
        <View style={[styles.box, { width: this.getEachLength(), height: this.getEachLength() }]} />
        <View style={[styles.box, { width: this.getEachLength(), height: this.getEachLength() }]} />
        <View style={[styles.box, { width: this.getEachLength(), height: this.getEachLength() }]} />
        <View style={[styles.box, { width: this.getEachLength(), height: this.getEachLength() }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 100,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    backgroundColor: '#bad455',
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default Categories;
