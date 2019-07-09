import React, { Component } from 'react';
import Profile from './Profile.js';
import EditScreenOne from './EditScreenOne.js';
import EditScreenTwo from './EditScreenTwo.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const DrawNav = createStackNavigator(
  {
    Profile: { screen: Profile },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo }
  },
  {
    initialRouteName: 'Profile'
  }
);

export default createAppContainer(DrawNav);
