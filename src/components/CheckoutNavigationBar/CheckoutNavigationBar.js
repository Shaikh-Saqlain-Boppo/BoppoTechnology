import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

const Step = ({number, title, isActive}) => {
  const backgroundColor = isActive ? '#3876BF' : 'grey';
  return (
    <View style={styles.stepContainer}>
      <View style={{...styles.stepCircle, backgroundColor}}>
        <Text style={styles.stepNumber}>{number}</Text>
      </View>
      <Text style={styles.stepText}>{title}</Text>
    </View>
  );
};

const CheckoutNavigationBar = () => {
  const route = useRoute();
  const [state, setState] = useState('YourCart');

  useEffect(() => {
    setState(route?.name);
  }, [route]);

  return (
    <View style={styles.container}>
      <Step
        number={1}
        title="Your Cart"
        isActive={
          state === 'YOUR_CART_SCREEN' ||
          state === 'ORDER_SUMMARY_SCREEN' ||
          state === 'PAYMENT_SCREEN'
        }
      />
      <Step
        number={2}
        title="Order Summary"
        isActive={
          state === 'ORDER_SUMMARY_SCREEN' || state === 'PAYMENT_SCREEN'
        }
      />
      <Step number={3} title="Payment" isActive={state === 'PAYMENT_SCREEN'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  stepContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircle: {
    borderRadius: 15,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  stepNumber: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  stepText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
  },
});

export default CheckoutNavigationBar;
