import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';


import ExploreNavBar from './../../NavBar/ExploreNavBar';
import Featured from './Featured';
import Categories from './Categories';

class Explore extends Component {

  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }} contentContainerStyle={{ flexDirection: 'column', flex: 1 }}>
        <ExploreNavBar />
        <ScrollView style={{}}>
          <Featured />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
        </ScrollView>
      </ScrollView>
    );
  }
}

export default Explore;
