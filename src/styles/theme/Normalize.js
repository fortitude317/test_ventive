import { Dimensions, PixelRatio, Platform } from 'react-native';

export const { width, height } = Dimensions.get('window');
// alert('width: + width + ', height: ' + height);

const isAndroid = Platform.OS === 'android';
// based on iPhone 8's scale
const wscale = width / (isAndroid ? 411 : 375);
const hscale = height / (isAndroid ? 683 : 812);

export default function normalize(size, based = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize) - 2);
}
