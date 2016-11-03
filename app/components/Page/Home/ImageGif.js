import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const maxwidth = Dimensions.get('window').width;

class ImageGif extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
    };
  }


  componentDidMount() {
    Image.getSize(this.props.source, (width, height) => {
      this.setState({ width, height });
    });
  }

  getCalculatedHeight() {
    return (this.state.height / this.state.width) * maxwidth;
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        <Image style={[styles.image, { height: this.getCalculatedHeight() }]} source={{ uri: this.props.source }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: maxwidth,
  },
});

export default ImageGif;
