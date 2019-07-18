import React, { Component } from 'react';
import { StyleSheet, WebView } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text } from 'native-base';

export class ViewEmailScreen extends Component {
  componentDidMount = () => {
    this.props.validCredentials !== true && this.props.navigation.navigate('Cred');
  };

  render() {
    return (
      <Container>
        {this.props.selectedEmail.body_html ? (
          <Content contentContainerStyle={{ flex: 1 }}>
            <WebView
              originWhitelist={['*']}
              source={{ html: this.props.selectedEmail.body_html }}
            />
          </Content>
        ) : (
          <Content contentContainerStyle={{ flex: 1 }}>
            <Text>{`${this.props.selectedEmail.body_plain}`}</Text>
          </Content>
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
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '600'
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
