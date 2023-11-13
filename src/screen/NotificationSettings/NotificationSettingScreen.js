import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {ButtonGroup} from 'react-native-elements';
import {styles} from './NotificationSettingStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import NotificationSettingHooks from './NotificationSettingHooks';

const SwitchToggle = ({title}) => {
  const {isOn, setIsOn, toggleSwitch} = NotificationSettingHooks();

  return (
    <View style={styles.toggleContainer}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <View style={styles.textView}>
        <Text style={styles.text}>{title}</Text>
      </View>

      <TouchableOpacity onPress={toggleSwitch}>
        <View
          style={{
            ...styles.toggle,
            backgroundColor: isOn ? '#0174BE' : '#A9A9A9',
          }}>
          <View
            style={{
              ...styles.toggleSmall,
              backgroundColor: isOn ? '#279EFF' : '#ddd',
            }}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const NotificationSettings = () => {
  const {handleGoBack} = NotificationSettingHooks();
  return (
    <View>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Notification Setting'} onPress={handleGoBack} />
      <SwitchToggle title={'Orders Alert'} />
      <SwitchToggle title={'New Products Alert'} />
      <SwitchToggle title={'Recommendations Alert'} />
      <SwitchToggle title={'Feedback and Review Alert'} />
      <SwitchToggle title={'New offers Alert'} />
    </View>
  );
};

export default NotificationSettings;