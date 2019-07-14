import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Item, Input, Label } from 'native-base';

export class CredentialsScreen extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Form>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Name</Label>
              <Input autoCapitalize="none" />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Email</Label>
              <Input autoCapitalize="none" />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Password</Label>
              <Input secureTextEntry={true} autoCapitalize="none" />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>IMAP Server</Label>
              <Input autoCapitalize="none" />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>IMAP Port</Label>
              <Input autoCapitalize="none" />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>SMTP Server</Label>
              <Input autoCapitalize="none" />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>SMTP Port</Label>
              <Input autoCapitalize="none" />
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CredentialsScreen);
