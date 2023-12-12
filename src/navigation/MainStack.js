import React from 'react';

import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Colors, Constant, Fonts, ScreenNames } from '../global';
import SplashScreen from '../screen/SpashScreen';
import BottomTabs from './BottomTabs/BottomTabs';
import ProductDetailViewScreen from '../screen/ProductDetailView/ProductDetailViewScreen';
import BillingAddressScreen from '../screen/BillingAddress/BillingAddressScreen';
import DelieveryAddressScreen from '../screen/DeliveryAddress.js/DelieveryAddressScreen';
import MyAddressScreen from '../screen/MyAddress/MyAddressScreen';
import AddNewAddress from '../screen/AddNewAddress/AddNewAddressScreen';
import CurrencyScreen from '../screen/Currency/CurrencyScreen';
import NotificationSettings from '../screen/NotificationSettings/NotificationSettingScreen';
import SellWithUsScreen from '../screen/SellWithUs/SellWithUsScreen';
import PrivacyPolicyScreen from '../screen/PrivacyPolicy/PrivacyPolicyScreen';
import RefundPolicyScreen from '../screen/RefundPolicy/RefundPolicyScreen';
import ShippingPolicyScreen from '../screen/ShippingPolicy/ShippingPolicyScreen';
import TermsAndConditonsScreen from '../screen/TermsOfService/TermsOfServiceScreen';
import ContactUsScreen from '../screen/ContactUs/ContactUsScreen';
import MyReviewsScreen from '../screen/MyReviews/MyReviewsScreen';
import MyQuestionAnswerScreen from '../screen/MyQuestion&Answer/MyQuestionAnswerScreen';
import EditProfileScreen from '../screen/EditProfile/EditProfileScreen';
import WishlistScreen from '../screen/Wishlist/WishlistScreen';
import OnBoardingScreen from '../screen/OnBoarding/OnBoardingScreen';
import LoginScreen from '../screen/Login/LoginScreen';
import CreateAccountScreen from '../screen/CreateAccount/CreateAccountScreen';
import VerifyMobileNumberScreen from '../screen/VerifyMobileNumberScreen/VerifyMobileNumberScreen';
import EmailVerifyScreen from '../screen/VerifyEmail/VerifyEmailScreen';
import ForgetPasswordScreen from '../screen/ForgetPassword/ForgetPasswordScreen';
import ForgetPasswordOtpScreen from '../screen/ForgetPasswordOtp/ForgetPasswordOtpScreen';
import SuccessScreen from '../screen/SuccessScreen/SuccessScreen';
import OrderDetailsScreen from '../screen/OrderDetails/OrderDetailsScreen';
import OrderScreen from '../screen/Order/OrderScreen';
import CancelReturnDetailScreen from '../screen/Cancel-ReturnDetails/Cancel-ReturnDetailScreen';
import QuestionDetailScreen from '../screen/QuestionDetailView/QuestionDetailScreen';
import YourCart from '../screen/YourCart/YourCartScreen';
import OrderSummary from '../screen/OrderSummary/OrderSummaryScreen';
import PaymentScreen from '../screen/Payment/PaymentScreen';
import PaymentSuccess from '../screen/PaymentSuccess/PaymentSuccess';
import Filter from '../screen/Filter/FilterScreen';
import CustomToastedAlert from './CustomToastedAlert';
import CategoryScreen from '../screen/Category/CategoryScreen';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as UserAction from '../redux/actions/userActions'
enableScreens();
const Stack = createStackNavigator();
const MainStack = () => {
  const dispatch = useDispatch()
  const getTheme = async () => {
    let themeUrl = `http://stage-api.boppogo.com/auth/api/v1/customer/shop-customer-theme`
    const response = await axios.get(themeUrl)
    dispatch(UserAction.setAppData({
      primaryColor: response.data?.data?.getShopTheme?.colors?.primaryColor ? response.data?.data?.getShopTheme?.colors?.primaryColor : '#3876bf',
      secondaryColor: response.data?.data?.getShopTheme?.colors?.secondaryColor ? response.data?.data?.getShopTheme?.colors?.secondaryColor : '#040404',
      ternaryColor: response.data?.data?.getShopTheme?.colors?.ternaryColor ? response.data?.data?.getShopTheme?.colors?.ternaryColor : null,
      quaternaryColor: response.data?.data?.getShopTheme?.colors?.quaternaryColor ? response.data?.data?.getShopTheme?.colors?.quaternaryColor : null,
      appLogo:response.data?.data?.getShopTheme?.main_logo_url
    }))
  }
  React.useEffect(() => {
    getTheme()
  }, [])
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={ScreenNames.SPLASH_SCREEN}>
          <Stack.Screen
            name={ScreenNames.SPLASH_SCREEN}
            component={SplashScreen}
          />
          <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTabs} />
          <Stack.Screen
            name={ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN}
            component={ProductDetailViewScreen}
          />
          <Stack.Screen
            name={ScreenNames.MY_ADDRESSES}
            component={MyAddressScreen}
          />
          <Stack.Screen
            name={ScreenNames.DELIEVERY_ADDRESS}
            component={DelieveryAddressScreen}
          />
          <Stack.Screen
            name={ScreenNames.BILLING_ADDRESS}
            component={BillingAddressScreen}
          />
          <Stack.Screen
            name={ScreenNames.ADD_NEW_ADDRESS}
            component={AddNewAddress}
          />
          <Stack.Screen
            name={ScreenNames.CURRENCY_SCREEN}
            component={CurrencyScreen}
          />
          <Stack.Screen
            name={ScreenNames.NOTIFICATION_SCREEN}
            component={NotificationSettings}
          />
          <Stack.Screen
            name={ScreenNames.SELL_WITH_US_SCREEN}
            component={SellWithUsScreen}
          />
          <Stack.Screen
            name={ScreenNames.PRIVACY_POLICY_SCREEN}
            component={PrivacyPolicyScreen}
          />
          <Stack.Screen
            name={ScreenNames.REFUND_POLICY_SCREEN}
            component={RefundPolicyScreen}
          />
          <Stack.Screen
            name={ScreenNames.SHIPPING_POLICY_SCREEN}
            component={ShippingPolicyScreen}
          />
          <Stack.Screen
            name={ScreenNames.TERMS_AND_CONDITION_SCREEN}
            component={TermsAndConditonsScreen}
          />
          <Stack.Screen
            name={ScreenNames.CONTACT_US_SCREEN}
            component={ContactUsScreen}
          />
          <Stack.Screen
            name={ScreenNames.MY_REVIEW_SCREEN}
            component={MyReviewsScreen}
          />
          <Stack.Screen
            name={ScreenNames.MY_QUESTION_ANSWER_SCREEN}
            component={MyQuestionAnswerScreen}
          />
          <Stack.Screen
            name={ScreenNames.EDIT_PROFILE_SCREEN}
            component={EditProfileScreen}
          />
          <Stack.Screen
            name={ScreenNames.LOGIN_SCREEN}
            component={LoginScreen}
          />
          <Stack.Screen
            name={ScreenNames.CREATE_NEW_ACCOUNT}
            component={CreateAccountScreen}
          />
          <Stack.Screen
            name={ScreenNames.VERIFY_MOBILE_NUMBER}
            component={VerifyMobileNumberScreen}
          />
          <Stack.Screen
            name={ScreenNames.VERIFY_EMAIL}
            component={EmailVerifyScreen}
          />
          <Stack.Screen
            name={ScreenNames.WISHLIST_SCREEN}
            component={WishlistScreen}
          />
          <Stack.Screen
            name={ScreenNames.ORDER_SCREEN}
            component={OrderScreen}
          />
          <Stack.Screen
            name={ScreenNames.YOUR_CART_SCREEN}
            component={YourCart}
          />
          <Stack.Screen
            name={ScreenNames.ORDER_SUMMARY_SCREEN}
            component={OrderSummary}
          />
          <Stack.Screen
            name={ScreenNames.ONBOARDING_SCREEN}
            component={OnBoardingScreen}
          />
          <Stack.Screen
            name={ScreenNames.ORDERDETAIL_SCREEN}
            component={OrderDetailsScreen}
          />
          <Stack.Screen
            name={ScreenNames.CANCELRETURNDETAIL_SCREEN}
            component={CancelReturnDetailScreen}
          />
          <Stack.Screen
            name={ScreenNames.FORGET_PASSWORD_SCREEN}
            component={ForgetPasswordScreen}
          />
          <Stack.Screen
            name={ScreenNames.FORGET_PASSWORD_OTP_SCREEN}
            component={ForgetPasswordOtpScreen}
          />
          <Stack.Screen
            name={ScreenNames.SUCCESS_SCREEN}
            component={SuccessScreen}
          />
          <Stack.Screen
            name={ScreenNames.MOBILE_OTP_SCREEN}
            component={VerifyMobileNumberScreen}
          />
          <Stack.Screen
            name={ScreenNames.QUESTION_DETAIL_VIEW}
            component={QuestionDetailScreen}
          />
          <Stack.Screen name={ScreenNames.FILTER} component={Filter} />

          <Stack.Screen
            name={ScreenNames.PAYMENT_SCREEN}
            component={PaymentScreen}
          />

          <Stack.Screen
            name={ScreenNames.PAYMENT_SUCCESS}
            component={PaymentSuccess}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <AddToCartButton 
      proceedFlag={false}
      leftSvg={
        <View>
          <CartWhiteSvg height={CHANGE_BY_MOBILE_DPI(23)} width={CHANGE_BY_MOBILE_DPI(23)} fill={Colors.WHITE} />
          <View style={styles.positionContainer}>
            <View style={styles.circleContainer}>
              <Text style={styles.countFontStyle}>4</Text>
            </View>
          </View>
        </View>
      } 
      /> */}
      <CustomToastedAlert />
    </>
  );
};
export default MainStack;
