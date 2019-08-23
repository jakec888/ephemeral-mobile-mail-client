/* 
  All Emails List Screen

  !!! limit 25 emails !!!

  the api return a list of 25 emails from the labeled 'All Emails' folder.
  limit is 25 due to the imbox library which uses .uid() to build its query; the uid protocal does not allow for limits or ordering.
  
  imbox library must be update.
*/

import React, { Component, Fragment } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Spinner,
  ListItem,
  View,
  Body,
  Right,
  Text,
  Button
} from 'native-base';

import moment from 'moment';

import selectEmailActions from '../../redux/actions/selectEmail.action';
import retrieveEmailActions from '../../redux/actions/retrieveEmail.actions';

export class AllMailScreen extends Component {
  componentDidMount = () => {
    if (this.props.validCredentials) {
      this.onRetrieveAllMail();
    } else {
      this.props.navigation.navigate('Cred');
    }
  };

  onRetrieveAllMail = async () => {
    await this.props.loadingEmail(true);
    await this.props.retrieveEmails('AllMail');
    await this.props.loadingEmail(false);
  };

  onRefresh = async () => {
    await this.onRetrieveAllMail();
  };

  onSelectEmail = (emailId, name, email, subject, date) => {
    this.props.selectEmail(emailId);
    this.props.navigation.navigate('View', {
      emailName: name,
      emailEmail: email,
      emailSubject: subject,
      emailDate: date
    });
  };

  emailView = ({ item }) => {
    const emailDate = new Date(item.date);

    const calendar = moment(emailDate).format('ll');

    const time = moment(emailDate).format('LT');

    return (
      <ListItem
        avatar
        onPress={() => {
          this.onSelectEmail(item.id, item.name, item.email, item.subject, item.date);
        }}
      >
        <Body>
          <Text style={styles.hOneStyle}>{item.name}</Text>
          <Text style={styles.hTwoStyle}>{item.subject}</Text>
          <Text note>
            {item.body_plain ? ' — ' + item.body_plain.substring(0, 50) + '...' : false}
          </Text>
        </Body>
        <Right style={styles.dateStyle}>
          <Text note>{calendar}</Text>
          <Text note>at</Text>
          <Text note>{time}</Text>
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
            <Text>Retrieving All Mail...</Text>
          </View>
        ) : (
          <Fragment>
            {this.props.allMailEmails ? (
              <FlatList
                data={this.props.allMailEmails}
                renderItem={this.emailView}
                keyExtractor={(item) => item.id}
                refreshing={this.props.loading}
                onRefresh={this.onRefresh}
              />
            ) : (
              <View style={styles.spinnerContainer}>
                {this.props.error ? (
                  <Fragment>
                    <Text>Please Limit To Folders</Text>
                    <Text style={styles.errorTextBottom}>With Less Than 25 Emails</Text>
                  </Fragment>
                ) : (
                  <Text style={styles.errorTextBottom}>No Emails</Text>
                )}
                <Button
                  primary
                  full
                  bordered
                  rounded
                  style={styles.button}
                  onPress={this.onRefresh}
                >
                  <Text style={styles.buttonText}>Refresh</Text>
                </Button>
              </View>
            )}
          </Fragment>
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
  },
  errorTextBottom: { marginBottom: '3%' },
  button: {
    borderColor: '#3f51b5',
    color: '#3f51b5',
    alignSelf: 'center',
    width: '50%'
  },
  buttonText: {
    textAlign: 'center',
    color: '#3f51b5'
  }
});

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials,
  allMailEmails: state.RetrieveEmails.emails,
  loading: state.RetrieveEmails.loading,
  error: state.RetrieveEmails.error
});

const mapDispatchToProps = {
  selectEmail: selectEmailActions.selectEmail,
  retrieveEmails: retrieveEmailActions.retrieveEmails,
  loadingEmail: retrieveEmailActions.loadingEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllMailScreen);
