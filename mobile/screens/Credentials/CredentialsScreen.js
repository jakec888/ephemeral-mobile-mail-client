import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Item, Input, Label } from 'native-base';

import userActions from '../../redux/actions/user.actions';

export class CredentialsScreen extends Component {
  onChangeName = (text) => {
    this.props.updateName(text);
  };

  onChangeEmail = (text) => {
    this.props.updateEmail(text);
  };

  onChangePassword = (text) => {
    this.props.updatePassword(text);
  };

  onChangeIMAPServer = (text) => {
    this.props.updateIMAPServer(text);
  };

  onChangeIMAPPort = (text) => {
    this.props.updateIMAPPort(text);
  };

  onChangeSMTPServer = (text) => {
    this.props.updateSMTPServer(text);
  };

  onChangeSMTPPort = (text) => {
    this.props.updateSMTPPort(text);
  };

  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Form>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Name</Label>
              <Input autoCapitalize="none" onChangeText={this.onChangeName} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Email</Label>
              <Input autoCapitalize="none" onChangeText={this.onChangeEmail} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Password</Label>
              <Input
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={this.onChangePassword}
              />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>IMAP Server</Label>
              <Input autoCapitalize="none" onChangeText={this.onChangeIMAPServer} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>IMAP Port</Label>
              <Input autoCapitalize="none" onChangeText={this.onChangeIMAPPort} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>SMTP Server</Label>
              <Input autoCapitalize="none" onChangeText={this.onChangeSMTPServer} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>SMTP Port</Label>
              <Input autoCapitalize="none" onChangeText={this.onChangeSMTPPort} />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '95%'
  },
  input: {
    borderColor: '#3f51b5'
  },
  label: {
    color: '#3f51b5'
  }
});

const mapStateToProps = (state) => ({
  name: state.Profile.name,
  email: state.Profile.email,
  password: state.Profile.password,
  imap_server: state.Profile.imap_server,
  imap_port: state.Profile.imap_port,
  smtp_server: state.Profile.smtp_server,
  smtp_port: state.Profile.smtp_port,
  validCredentials: state.Profile.validCredentials
});

const mapDispatchToProps = {
  updateName: userActions.updateName,
  updateEmail: userActions.updateEmail,
  updatePassword: userActions.updatePassword,
  updateIMAPServer: userActions.updateIMAPServer,
  updateIMAPPort: userActions.updateIMAPPort,
  updateSMTPServer: userActions.updateSMTPServer,
  updateSMTPPort: userActions.updateSMTPPort,
  authenticateUser: userActions.authenticateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CredentialsScreen);
