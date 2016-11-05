import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import CatTitle from './CatTitle';

import ExploreNavBar from './../../NavBar/ExploreNavBar';
import Featured from './Featured';
import Categories from './Categories';

class Explore extends Component {

  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }} contentContainerStyle={{ flexDirection: 'column', flex: 1 }}>
        <ExploreNavBar />
        <ScrollView style={{}}>
          <CatTitle name={'Featured'} />
          <Featured />
          <CatTitle name={'Funny'} />
          <Categories />
          <CatTitle name={'WTF'} />
          <Categories />
          <CatTitle name={'GIF'} />
          <Categories />
          <CatTitle name={'NSFW'} />
          <Categories />
          <CatTitle name={'Gaming'} />
          <Categories />
          <CatTitle name={'Anime & Manga'} />
          <Categories />
          <CatTitle name={'Movie & TV'} />
          <Categories />
          <CatTitle name={'Cute'} />
          <Categories />
          <CatTitle name={'Girl'} />
          <Categories />
          <CatTitle name={'Awesome'} />
          <Categories />
          <CatTitle name={'Cosplay'} />
          <Categories />
          <CatTitle name={'Sport'} />
          <Categories />
          <CatTitle name={'Food'} />
          <Categories />
          <CatTitle name={'Ask 9GAG'} />
          <Categories />
          <CatTitle name={'Timely'} />
          <Categories />
        </ScrollView>
      </ScrollView>
    );
  }
}

export default Explore;
