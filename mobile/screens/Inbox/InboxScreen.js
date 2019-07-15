import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Spinner, List, ListItem, Body, Right, Text } from 'native-base';

import moment from 'moment';

import selectEmailActions from '../../redux/actions/selectEmail.action';
import retrieveEmailActions from '../../redux/actions/retrieveEmail.actions';

export class InboxScreen extends Component {
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

  email = ({ id, subject, name, body_plain, date }) => {
    const emailDate = new Date(date);

    const calendar = moment(emailDate).format('ll');

    const time = moment(emailDate).format('LT');

    const when = moment(emailDate)
      .startOf('hour')
      .fromNow();

    return (
      <ListItem avatar key={id}>
        <Body>
          <Text style={styles.hOneStyle}>{name}</Text>
          <Text style={styles.hTwoStyle}>{subject}</Text>
          <Text note>
            {body_plain ? ' — ' + body_plain.substring(0, 50) + '...' : false}
          </Text>
        </Body>
        <Right style={styles.dateStyle}>
          <Text note>{calendar}</Text>
          <Text note>at</Text>
          <Text note>{time}</Text>
          <Text note>({when})</Text>
        </Right>
      </ListItem>
    );
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
          <List>
            {this.props.inboxEmails ? (
              this.props.inboxEmails.map((email) => this.email(email))
            ) : (
              <View style={styles.spinnerContainer}>
                <Text>No Inbox Emails</Text>
              </View>
            )}
          </List>
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
  },
  hOneStyle: {
    fontSize: 20,
    fontWeight: '700'
  },
  hTwoStyle: {
    fontSize: 15,
    fontWeight: '500'
  },
  dateStyle: {
    justifyContent: 'center',
    alignItems: 'center'
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
