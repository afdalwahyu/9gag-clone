import React, { Component } from 'react';
import {
  ListView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';


import Container from './Container';
import DefaultTabBar from './TabBar/DefaultTabBar';
import HomeNavBar from './../../NavBar/HomeNavBar';

class Content extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', '3', '4', '5', '6', '7']),
      hidden: {},
    };
    this.offset = 0;
    this.scrolled = 0;
  }

  onScroll(event) {
    if (this.scrolled === 27) {
      const currentOffset = event.nativeEvent.contentOffset.y;

      if (currentOffset > this.offset) {
        // hide navbar
        this.setState({ hidden: { width: 0, height: 0 } });
      } else {
        // show navbar
        this.setState({ hidden: {} });
      }
      this.offset = currentOffset;
      this.scrolled = 0;
    }
    this.scrolled += 1;
  }

  renderRow() {
    return (
      <Container />
    );
  }

  render() {
    const Tab = (
      <DefaultTabBar
        containerstyle={this.state.hidden}
        header={<HomeNavBar />}
      />
    );

    return (
      <ScrollableTabView
        tabBarInactiveTextColor={'#54504C'}
        tabBarActiveTextColor={'#fff'}
        tabBarBackgroundColor={'#000'}
        tabBarPosition={'top'}
        initialPage={0}
        renderTabBar={() => Tab}
      >

        <ListView onScroll={event => this.onScroll(event)} tabLabel={'HOT'} dataSource={this.state.dataSource} renderRow={() => this.renderRow()} />
        <ListView tabLabel={'TRENDING'} dataSource={this.state.dataSource} renderRow={() => this.renderRow()} />
        <ListView tabLabel={'FRESH'} dataSource={this.state.dataSource} renderRow={() => this.renderRow()} />
      </ScrollableTabView>
    );
  }
}

export default Content;
