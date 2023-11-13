import {Text, View, TextInput} from 'react-native';
import React from 'react';
import {styles} from './CustomTextFieldStyle';
import {Colors} from '../../global';

const CustomTextField = ({
  keyboardType,
  placeholder,
  title = '',
  showAsterisk,
  showSecure,
  error,
  value,
  placeholderTextColor,
  externalContainer,
  maxLenght,
  titleExternalStyle,
  onChangeText = () => {},
}) => {
  return (
    <View style={[styles.marginContainer, externalContainer]}>
      <View style={[styles.titleview, titleExternalStyle]}>
        <Text style={styles.title}>{title}</Text>
        {showAsterisk && <Text style={styles.asterisk}>*</Text>}
      </View>
      <TextInput
        maxLength={maxLenght}
        style={[styles.input, error && styles.inputError]}
        placeholder={placeholder}
        keyboardType={'default' || keyboardType}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={showSecure}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextField;