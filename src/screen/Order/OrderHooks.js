import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import AllOrderScreen from '../AllOrders/AllOrdersScreen';
import CancelReturnScreen from '../CancelReturn/CancelReturnScreen';
import {styles} from './OrderStyle';
import {Colors, ScreenNames} from '../../global';

const OrderHooks = () => {
  //HOOKS
  const [currentTab, setCurrentTab] = useState(1);

  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };

  const [selectedTab, setSelectTabs] = React.useState(0);
  const openCustomView = () => {
    return (
      <View>
        {selectedTab == 0 ? (
          <AllOrderScreen />
        ) : selectedTab == 1 ? (
          <CancelReturnScreen />
        ) : null}
      </View>
    );
  };

  const renderTopBar = ({item, index}) => {
    const addIndexOntState = () => {
      setSelectTabs(index);
    };
    let bottomBar = selectedTab == index && {backgroundColor: Colors.PRIMARY};
    return (
      <TouchableOpacity
        style={styles.barContainerStyle}
        onPress={addIndexOntState}>
        <Text
          style={[
            selectedTab == index
              ? styles.labelFontStyle
              : styles.labelBlurFontStyle,
          ]}>
          {item}
        </Text>
        <View style={{...styles.bottomBar, ...bottomBar}}></View>
      </TouchableOpacity>
    );
  };
  const navigation = useNavigation();
  const navigateToCartPage = () => {
    navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
  };

  return {
    setCurrentTab,
    handleGoBack,
    openCustomView,
    renderTopBar,
    navigateToCartPage
  };
};

export {OrderHooks};
