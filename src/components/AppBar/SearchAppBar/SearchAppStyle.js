import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../../global/constant';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    height: CHANGE_BY_MOBILE_DPI(45),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  arrowWrapper: {
    justifyContent: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: CHANGE_BY_MOBILE_DPI(15),
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
  },
  title: {
    fontSize: CHANGE_BY_MOBILE_DPI(18),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_MEDIUM,
    includeFontPadding: false,
  },
  iconWrapper: {
    flexDirection: 'row',
    gap: CHANGE_BY_MOBILE_DPI(20),
    marginRight: CHANGE_BY_MOBILE_DPI(25),
  },
});