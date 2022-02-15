import { Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const dmHeight = wp('100%') > hp('100%') ? wp('100%') : hp('100%');

const metrics = {
  screenWidth: wp('100%'),
  screenHeight: hp('100%'),
  minHeight: dmHeight,
  smallMargin: 5,
  baseMargin: 10,
  doubleMargin: 20,
  bigMargin: 30,
  smallPadding: 5,
  basePadding: 10,
  doublePadding: 20,
  bigPadding: 30,
  ios: Platform.OS === 'ios',
  landscape: wp('100%') > hp('100%'),
  formContainer: (dark) => ({
    flex: 1,
    minHeight: dmHeight * 0.8,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 20,
    paddingTop: 0,
    backgroundColor: dark ? 'black' : 'white',
  }),
};

export default metrics;
