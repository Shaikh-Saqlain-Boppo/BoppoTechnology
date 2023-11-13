import {useNavigation} from '@react-navigation/native';
import {Text, View, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {ScreenNames} from '../../global';
const VerifyMobileNumberHooks = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const checkLoginWithEmailOrMobileNumber = useSelector(e => e.user?.loginWith);
  const goBackToLogin = (quantity, showAlert) => {
    showAlert && invokeToastAlert();
    navigation.pop(quantity);
  };
  const invokeToastAlert = () => {
    dispatch(
      UserAction.setToastedAlert({
        condition: true,
        toastedAlertText: `You are successfully registered.${'\n'}PLease Login here to contibue`,
      }),
    );
  };

  // FUNCTION
  const navigateToHomePage = () => {
    navigation.navigate(ScreenNames.BOTTOM_TAB);
  };

  return {
    goBackToLogin,
    invokeToastAlert,
    checkLoginWithEmailOrMobileNumber,
    navigateToHomePage,
  };
};
export {VerifyMobileNumberHooks};