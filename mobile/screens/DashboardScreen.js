import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DashboardScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Sup!'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard Screen</Text>
      </View>
    );
  }
}
