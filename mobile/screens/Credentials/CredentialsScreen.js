import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Item, Input, Label } from 'native-base';

export class CredentialsScreen extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Form>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Password</Label>
              <Input />
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
