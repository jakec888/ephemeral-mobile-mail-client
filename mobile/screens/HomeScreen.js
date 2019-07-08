import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

export class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  sample: state.User
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
