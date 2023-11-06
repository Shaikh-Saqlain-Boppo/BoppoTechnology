import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {styles} from './DealsOfTheDayStyles';
import {useNavigation} from '@react-navigation/native';
import {ScreenName, ScreenNames} from '../../global/index';

const DealsOfTheDayHooks = () => {
  const navigation = useNavigation();
  const data = [
    {
      key: '1',
      image: require('../../assets/images/carasolimage.png'),
      name: 'Personal care',
      price: '18.44',
    },
    {
      key: '2',
      image: require('../../assets/images/carasolimage.png'),
      name: 'Grocery',
      price: '18.44',
    },
    {
      key: '3',
      image: require('../../assets/images/carasolimage.png'),
      name: 'Dairy Prouct',
      price: '18.44',
    },
    {
      key: '4',
      image: require('../../assets/images/carasolimage.png'),
      name: 'Fishes',
      price: '18.44',
    },
    // Add more items as needed
  ];

  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={navigateToProductDetail}>
      <Image source={item.image} style={styles.image} />
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontWeight: 700,
          marginVertical: 3,
        }}>
        {item.name}
      </Text>
      <Text style={{color: '#AAAAAA', fontSize: 12, fontWeight: 600}}>
        From ${item.price}
      </Text>
    </TouchableOpacity>
  );

  return {
    data,
    renderItem,
  };
};

export {DealsOfTheDayHooks};
