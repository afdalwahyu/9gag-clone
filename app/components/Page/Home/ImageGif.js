import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

class ImageGif extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
      imageWidth: null,
      imageHeight: null,
    };
  }


  componentDidMount() {
    Image.getSize(this.props.source, (width, height) => {
      this.setState({
        imageWidth: width,
        imageHeight: height,
      });
    });
  }

  getCalculatedHeight() {
    return (this.state.imageHeight / this.state.imageWidth) * this.state.width;
  }

  calculateWH(event) {
    const { width } = event.nativeEvent.layout;
    this.setState({
      width,
    });
  }

  render() {
    return (
      <View
        style={{ flex: 1 }}
        onLayout={event => this.calculateWH(event)}
      >
        <Image
          style={[styles.image, { width: this.state.width, height: this.getCalculatedHeight() }]}
          source={{ uri: this.props.source }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
  },
});

export default ImageGif;
