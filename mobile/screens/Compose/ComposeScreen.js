import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Textarea
} from 'native-base';

import composeEmailActions from '../../redux/actions/composeEmail.action';

export class ComposeScreen extends Component {
  componentDidMount = () => {
    this.props.validCredentials !== true && this.props.navigation.navigate('Cred');
  };

  onChangeToAddress = (text) => {
    this.props.updateToAddress(text);
  };

  onChangeSubject = (text) => {
    this.props.updateSubject(text);
  };

  onChangeMessage = (text) => {
    this.props.updateMessage(text);
  };

  onSendEmail = (event) => {
    console.log('working');
    console.log(event);
    // event.preventDefault();
    // this.props.onSendMessage();
  };

  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Form>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>To</Label>
              <Input
                autoCapitalize="none"
                value={this.props.currentTo}
                onChangeText={this.onChangeToAddress}
              />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Subject</Label>
              <Input
                autoCapitalize="none"
                value={this.props.currentSubject}
                onChangeText={this.onChangeSubject}
              />
            </Item>
            <Item style={styles.input}>
              <Textarea
                rowSpan={10}
                bordered
                autoCapitalize="none"
                placeholder="Message Here!"
                placeholderTextColor="#3f51b5"
                style={styles.TextAreaText}
                value={this.props.currentMessage}
                onChangeText={this.onChangeMessage}
              />
            </Item>
            <View style={styles.buttonContainer}>
              <Button
                danger
                full
                bordered
                rounded
                style={styles.buttonDelete}
                onPress={this.props.onTrashMessage}
              >
                <Text style={styles.buttonTextDelete}>Delete</Text>
              </Button>
              <Button
                primary
                full
                bordered
                rounded
                style={styles.buttonSend}
                onPress={this.onSendEmail}
              >
                <Text style={styles.buttonTextSend}>Send</Text>
              </Button>
            </View>
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
  },
  TextAreaText: {
    borderColor: '#fff',
    width: '100%',
    fontSize: 21
  },
  buttonContainer: {
    margin: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonDelete: {
    width: '35%'
  },
  buttonTextDelete: {},
  buttonSend: {
    borderColor: '#3f51b5',
    color: '#3f51b5',
    width: '35%'
  },
  buttonTextSend: {
    color: '#3f51b5'
  }
});

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials,
  currentTo: state.ComposeEmail.to,
  currentSubject: state.ComposeEmail.subject,
  currentMessage: state.ComposeEmail.message,
  emailError: state.ComposeEmail.error
});

const mapDispatchToProps = {
  updateToAddress: composeEmailActions.updateTo,
  updateSubject: composeEmailActions.updateSubject,
  updateMessage: composeEmailActions.updateMessage,
  onTrashMessage: composeEmailActions.trashMessage,
  onSendMessage: composeEmailActions.sendMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeScreen);
