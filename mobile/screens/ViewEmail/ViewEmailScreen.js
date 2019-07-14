import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

export class ViewEmailScreen extends Component {
  componentDidMount = () => {
    this.props.validCredentials !== true && this.props.navigation.navigate('Cred');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>View Email!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewEmailScreen);
