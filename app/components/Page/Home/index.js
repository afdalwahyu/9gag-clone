import React, { Component } from 'react';
import {
  View,
  ListView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';


import Container from './Container';
import DefaultTabBar from './TabBar/DefaultTabBar';

class Content extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', '3', '4', '5', '6', '7']),
    };
  }

  render() {
    return (
      <ScrollableTabView
        tabBarInactiveTextColor={'#54504C'}
        tabBarActiveTextColor={'#fff'}
        tabBarBackgroundColor={'#000'}
        tabBarPosition={'top'}
        initialPage={0}
        renderTabBar={() => <DefaultTabBar {...this.props} />}
      >
        <ListView tabLabel={'HOT'} dataSource={this.state.dataSource} renderRow={() => <Container />} />
        <ListView tabLabel={'TRENDING'} dataSource={this.state.dataSource} renderRow={() => <Container />} />
        <ListView tabLabel={'FRESH'} dataSource={this.state.dataSource} renderRow={() => <Container />} />
      </ScrollableTabView>
    );
  }
}

export default Content;
