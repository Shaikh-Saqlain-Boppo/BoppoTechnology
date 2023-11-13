const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
    paddingLeft: 15,
  },

  title2: {
    color: '#000000',
    textAlign: 'center',
    marginBottom: 35,
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
  },

  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 55,
    marginLeft: 10,
  },
  resendotp: {
    color: '#000000',
    textAlign: 'center',
    marginBottom: 35,
    marginTop: 35,
    fontSize: 13,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  line: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 2,
  },
  mainView: {
    backgroundColor: '#fff',
  },
  imageWrapper: {
    width: 240,
    height: 220,
    marginTop: 80,
    marginBottom: 85,
  },
});