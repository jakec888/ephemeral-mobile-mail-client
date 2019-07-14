import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

export class InboxScreen extends Component {
  componentDidMount = () => {
    if (this.props.validCredentials) {
      console.log('Valid!');
      // this.onRetrieveInbox();
    } else {
      // this.props.history.push('/');

      // this.props.navigation.navigate('Auth');
      this.props.navigation.navigate('Cred');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Inbox!</Text>
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
)(InboxScreen);
