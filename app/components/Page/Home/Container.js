import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

import Title from './Title';
import Status from './Status';
import FootButton from './FootButton';
import ImageGif from './ImageGif';

class Container extends Component {
  render() {
    return (
      <View>
        <Title title={'Some random Title will be here'} />
        <ImageGif source={'http://img-9gag-fun.9cache.com/photo/aLMBEjv_460s.jpg'} />
        <Status points={20} comments={77} />
        <FootButton />
      </View>
    );
  }
}

export default Container;
