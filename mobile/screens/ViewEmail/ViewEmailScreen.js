import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  // Header,
  // Title,
  Content,
  // Footer,
  // FooterTab,
  // Button,
  Left,
  Right,
  // Body,
  // Icon,
  Text,
  H1
  // H2,
  // H3
} from 'native-base';

import moment from 'moment';

export class ViewEmailScreen extends Component {
  componentDidMount = () => {
    this.props.validCredentials !== true && this.props.navigation.navigate('Cred');
  };

  render() {
    const date = new Date(this.props.selectedEmail.date);

    const calendar = moment(date).format('ll');

    const time = moment(date).format('LT');

    const when = moment(date)
      .startOf('hour')
      .fromNow();

    return (
      <Container style={styles.container}>
        <H1>{this.props.selectedEmail.subject}</H1>
        <Content>
          <Left>
            <Text>{this.props.selectedEmail.name}</Text>
            <Text>{this.props.selectedEmail.email}</Text>
          </Left>
          <Right>
            <Text>{`${calendar} at ${time} (${when})`}</Text>
          </Right>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials,
  selectedEmail: state.SelectedEmail
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewEmailScreen);
