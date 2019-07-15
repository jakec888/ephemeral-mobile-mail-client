import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Spinner, Content } from 'native-base';

import selectEmailActions from '../../redux/actions/selectEmail.action';
import retrieveEmailActions from '../../redux/actions/retrieveEmail.actions';

export class InboxScreen extends Component {
  // componentDidMount = () => {
  //   this.props.validCredentials !== true && this.props.navigation.navigate('Cred');

  //   this.onRetrieveInbox();
  // };

  componentDidMount = () => {
    if (this.props.validCredentials) {
      this.onRetrieveInbox();
    } else {
      this.props.navigation.navigate('Cred');
    }
  };

  onRetrieveInbox = async () => {
    await this.props.loadingEmail(true);
    await this.props.retrieveEmails('Inbox');
    await this.props.loadingEmail(false);
  };

  onSelectEmail = (emailId) => {
    this.props.selectEmail(emailId);
  };

  render() {
    return (
      <Container style={styles.container}>
        {this.props.loading ? (
          <View style={styles.spinnerContainer}>
            <Spinner color="#3f51b5" />
            <Text>Retrieving Inbox...</Text>
          </View>
        ) : (
          <View>
            <Text>Inbox Working!</Text>
          </View>
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials,
  inboxEmails: state.RetrieveEmails.emails,
  loading: state.RetrieveEmails.loading
});

const mapDispatchToProps = {
  selectEmail: selectEmailActions.selectEmail,
  retrieveEmails: retrieveEmailActions.retrieveEmails,
  loadingEmail: retrieveEmailActions.loadingEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InboxScreen);
