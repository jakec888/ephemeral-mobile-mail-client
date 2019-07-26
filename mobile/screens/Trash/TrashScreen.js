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

export class TrashScreen extends Component {
  componentDidMount = () => {
    if (this.props.validCredentials) {
      this.onRetrieveTrash();
    } else {
      this.props.navigation.navigate('Cred');
    }
  };

  onRetrieveTrash = async () => {
    await this.props.loadingEmail(true);
    await this.props.retrieveEmails('Trash');
    await this.props.loadingEmail(false);
  };

  onRefresh = async () => {
    await this.onRetrieveTrash();
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
            <Text>Retrieving Trash...</Text>
          </View>
        ) : (
          <Fragment>
            {this.props.trashEmails ? (
              <FlatList
                data={this.props.trashEmails}
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
  buttonContainer: {
    margin: '5%'
  },
  button: {
    borderColor: '#3f51b5',
    color: '#3f51b5',
    alignSelf: 'center',
    width: '50%'
  },
  buttonText: {
    color: '#3f51b5'
  }
});

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials,
  trashEmails: state.RetrieveEmails.emails,
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
)(TrashScreen);
