import React, { Component, Fragment } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Spinner, ListItem, Body, Right, Text } from 'native-base';

import moment from 'moment';

import selectEmailActions from '../../redux/actions/selectEmail.action';
import retrieveEmailActions from '../../redux/actions/retrieveEmail.actions';

export class AllMailScreen extends Component {
  componentDidMount = () => {
    if (this.props.validCredentials) {
      this.onRetrieveAll();
    } else {
      this.props.navigation.navigate('Cred');
    }
  };

  onRetrieveAll = async () => {
    await this.props.loadingEmail(true);
    await this.props.retrieveEmails('All Mail');
    await this.props.loadingEmail(false);
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

  email = ({ item }) => {
    const emailDate = new Date(item.date);

    const calendar = moment(emailDate).format('ll');

    const time = moment(emailDate).format('LT');

    const when = moment(emailDate)
      .startOf('hour')
      .fromNow();

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
            <Text>Retrieving All Mail...</Text>
          </View>
        ) : (
          <Fragment>
            {this.props.allEmails ? (
              <FlatList
                data={this.props.allEmails}
                renderItem={this.email}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <View style={styles.spinnerContainer}>
                <Text>No Emails</Text>
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
  }
});

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials,
  allEmails: state.RetrieveEmails.emails,
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
)(AllMailScreen);
