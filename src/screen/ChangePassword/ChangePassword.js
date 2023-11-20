import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../global';
import {styles} from './ChangePasswordStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import ChangePasswordHooks from './ChangePasswordHooks';

const ChangePassword = () => {
  const {handleGoBack, onPressCancel, onPressSave} = ChangePasswordHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Change Password'} onPress={handleGoBack} />
      <ScrollView style={styles.bg}>
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter current password'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Current Password'}
          showAsterisk={true}
          externalContainer={{
            ...styles.space,
            marginTop: CHANGE_BY_MOBILE_DPI(15),
          }}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter new password'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'New Password'}
          showAsterisk={true}
          externalContainer={styles.space}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'re-enter new password'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Confirm New Password'}
          showAsterisk={true}
          externalContainer={styles.space}
        />
      </ScrollView>
      <View style={styles.btn}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            gap: CHANGE_BY_MOBILE_DPI(5),
          }}>
          <TouchableOpacity
            onPress={onPressCancel}
            style={{
              backgroundColor: Colors.WHITE,
              height: CHANGE_BY_MOBILE_DPI(49),
              borderRadius: CHANGE_BY_MOBILE_DPI(8),
              borderColor: Colors.BLACK,
              flex: 1,
              borderWidth: CHANGE_BY_MOBILE_DPI(1.5),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: CHANGE_BY_MOBILE_DPI(12),
            }}>
            <Text
              style={{
                color: Colors.BLACK,
                fontFamily: Fonts.LATO_BOLD,
                fontSize: CHANGE_BY_MOBILE_DPI(16),
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressSave}
            style={{
              backgroundColor: Colors.BLACK,
              height: CHANGE_BY_MOBILE_DPI(49),
              borderRadius: CHANGE_BY_MOBILE_DPI(8),
              borderColor: Colors.BLACK,
              flex: 1,
              borderWidth: CHANGE_BY_MOBILE_DPI(1.5),
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: CHANGE_BY_MOBILE_DPI(12),
            }}>
            <Text
              style={{
                color: Colors.WHITE,
                fontFamily: Fonts.LATO_BOLD,
                fontSize: CHANGE_BY_MOBILE_DPI(16),
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;