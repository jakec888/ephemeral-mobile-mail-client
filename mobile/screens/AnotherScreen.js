import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AnotherScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Another Screen</Text>
      </View>
    );
  }
}
