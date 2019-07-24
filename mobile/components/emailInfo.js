import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

const EmailInfo = (props) => {
  exampleInfo = () => {
    const emailDate = new Date(props.date);

    const calendar = moment(emailDate).format('ll');

    const time = moment(emailDate).format('LT');

    Alert.alert(
      `${props.subject}`,
      `${props.name} \n ${props.email} \n ${calendar} \n at \n ${time} `
    );
  };

  return (
    <TouchableOpacity onPress={this.exampleInfo}>
      <Ionicons
        name="md-information-circle-outline"
        color="#fff"
        size={21}
        onPress={this.info}
      />
    </TouchableOpacity>
  );
};

export default EmailInfo;
