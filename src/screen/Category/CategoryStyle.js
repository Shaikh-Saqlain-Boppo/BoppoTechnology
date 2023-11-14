import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Constant, Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginBottom: CHANGE_BY_MOBILE_DPI(60),
  },
  productWrapper: {
    flexDirection: 'row',
    height: CHANGE_BY_MOBILE_DPI(92),
    width: Constant.SCREEN_WIDTH - 40,
    margin: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(17),
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  arrowWrapper: {
    height: CHANGE_BY_MOBILE_DPI(92),
    paddingHorizontal:CHANGE_BY_MOBILE_DPI(15),
    backgroundColor: Colors.GALLERY_GREY,
    borderTopRightRadius: CHANGE_BY_MOBILE_DPI(17),
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(17),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: CHANGE_BY_MOBILE_DPI(0),
  },
  imageWrapper: {
    height: CHANGE_BY_MOBILE_DPI(71),
    width: CHANGE_BY_MOBILE_DPI(71),
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
  },
  textWrapper: {
    fontSize: CHANGE_BY_MOBILE_DPI(18),
    fontFamily: Fonts.MANROPE_BOLD,
    alignItems: 'flex-start',
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(20),
  },
  productText: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
    alignItems: 'flex-start',
    color: Colors.GRAY_DARK,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    width: Constant.SCREEN_WIDTH - 220,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Constant.SCREEN_WIDTH,
  },
  searchFiledWrapper: {
    width: Constant.SCREEN_WIDTH - 50,
    marginTop: CHANGE_BY_MOBILE_DPI(5),
    marginBottom: CHANGE_BY_MOBILE_DPI(4),
  },
  count: {
    position: 'absolute',
    backgroundColor: Colors.PRIMARY,
    height: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(20),
    bottom: CHANGE_BY_MOBILE_DPI(14),
    left: CHANGE_BY_MOBILE_DPI(13),
    borderRadius: CHANGE_BY_MOBILE_DPI(100),
  },
  countNumber: {
    color: 'white',
    alignSelf: 'center',
  },
});
