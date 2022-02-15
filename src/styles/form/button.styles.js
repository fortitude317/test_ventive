import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../theme/';

export default () => StyleSheet.create({
  button: {
    width: Metrics.screenWidth * 0.8,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 3,
  },
  btnPrimary: {
    backgroundColor: Colors.yellow,
  },
  btnTransparent: {
    backgroundColor: Colors.transparent,
  },
  btnSecondary: {
    backgroundColor: '#3D3D3D',
  },
  text: {
    fontSize: Fonts.size.medium,
    fontWeight: 'bold',
  },
  textPrimary: {
    color: Colors.mainBlack,
  },
  textSecondary: {
    color: Colors.white,
  },
});
