import {createTheme} from '@shopify/restyle';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const size = {
  //Primary
  width: width,
  height: height,
};
export const palette = {
  //Primary
  primary: '#5B5DCB',
  primary1: '#FEC431',
  primary2: '#EAEFFF',
  primary3: '#7A869A',
  primary4: '#F6F8F9',
  primary5: '#232326',
  // Secondary
  secondary: '#CED4FD',
  secondary1: '#F5F6FF',
  secondary2: '#E0E0FD',
  //Tertiary
  tertiary: '#F4F5F7',
  tertiary1: '#CCCCD5',
  tertiary2: '#172B4D',

  //Supporting colos
  support: '#172B3D',
  support1: '#212121',
  support2: '#0F0250',
  support3: '#D80027',
  support4: '#FEC42D',
  support5: '#ACACAC',
  support6: '#ABABB5',
  support7: '#FFF',
  support8: '#000',
  support9: '#ededed',
  support10: '#C9C9C9',
  support11: '#5A5A5A', //rgb 90,90,90
  support12: '#888787',
  support13: '#181939', //24 25 57
  support14: '#F9F9ff', //249 249 255
  support15: '#1B1D54',
  support16: '#4547d1',
  support17: '#9d9d9d',
};

export const TypographyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card: {
    minHeight: 175,
    backgroundColor: 'white',
    borderRadius: 25,
    marginHorizontal: 30,
  },
});

export const fonts = {
  bold: 'Roboto-Bold',
  medium: 'Roboto-Medium',
  thin: 'Roboto-Thin',
  thinitalic: 'Roboto-ThinItalic',
  mediumItalic: 'Roboto-MediumItalic',
  regular: 'Roboto-Regular',
  italicLight: 'Roboto-LightItalic',
  italicBlack: 'Roboto-BlackItalic',
  boldItalic: 'Roboto-BoldItalic',
  italic: 'Roboto-Italic',
  black: 'Roboto-Black',
  condensedBold: 'RobotoCondensed-Bold',
};

const theme = createTheme({
  colors: {
    white: 'white',
    black: 'black',

    //Primary
    primary: palette.primary,
    primary1: palette.primary1,
    primary2: palette.primary2,
    primary3: palette.primary3,
    primary4: palette.primary4,
    primary5: palette.primary5,
    // Secondary
    secondary: palette.secondary,
    secondary1: palette.secondary1,
    secondary2: palette.secondary2,

    //Tertiary
    tertiary: palette.tertiary,
    tertiary1: palette.tertiary1,
    tertiary2: palette.tertiary2,

    //Supporting colos
    support: palette.support,
    support1: palette.support1,
    support2: palette.support2,
    support3: palette.support3,
    support4: palette.support4,
    support5: palette.support5,
    support6: palette.support6,
    support7: palette.support7,
    support8: palette.support8,
    support9: palette.support9,
    support10: palette.support10,
    support11: palette.support11,
    support12: palette.support12,
    support13: palette.support13,
    support14: palette.support14,
    support15: palette.support15,
    support16: palette.support16,
    support17: palette.support17,
  },
  spacing: {
    s: 5,
    m: 10,
    l: 20,
    xl: 25,
    xxl: 30,
    xxxl: 40,
    xxxxl: 50,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    // 10
    tertiary110bold: {
      color: 'tertiary1',
      fontFamily: fonts.bold,
      fontSize: 10,
    },
    support811regular: {
      color: 'support8',
      fontFamily: fonts.regular,
      fontSize: 11,
    },
    primary10bold: {
      color: 'primary',
      fontFamily: fonts.bold,
      fontSize: 1,
    },
    primary13medium: {
      color: 'primary',
      fontFamily: fonts.medium,
      fontSize: 13,
    },
    //12
    primary512regular: {
      color: 'primary5',
      fontFamily: fonts.regular,
      fontSize: 12,
    },

    primary25medium: {
      color: 'primary',
      fontFamily: fonts.medium,
      fontSize: 25,
    },
    support312regular: {
      color: 'support3',
      fontFamily: fonts.regular,
      fontSize: 12,
    },
    support412regular: {
      color: 'support4',
      fontFamily: fonts.regular,
      fontSize: 12,
    },
    support212Medium: {
      color: 'support2',
      fontFamily: fonts.medium,
      fontSize: 12,
    },
    // 20

    primary20bold: {
      color: 'primary',
      fontFamily: fonts.bold,
      fontSize: 20,
    },
    primary312regular: {
      color: 'primary3',
      fontFamily: fonts.regular,
      fontSize: 12,
    },
    primary118regular: {
      color: 'primary1',
      fontFamily: fonts.regular,
      fontSize: 18,
    },
    primary16bold: {
      color: 'primary',
      fontFamily: fonts.bold,
      fontSize: 16,
    },

    // 16
    white16Medium: {
      color: 'white',
      fontFamily: fonts.medium,
      fontSize: 16,
    },
    support12Medium: {
      color: 'support6',
      fontFamily: fonts.medium,
      fontSize: 12,
    },
    support216bold: {
      color: 'support2',
      fontFamily: fonts.bold,
      fontSize: 16,
    },
    support416regular: {
      color: 'support4',
      fontFamily: fonts.regular,
      fontSize: 16,
    },
    support1516medium: {
      color: 'support15',
      fontFamily: fonts.medium,
      fontSize: 16,
    },
    support1512regular: {
      color: 'support15',
      fontFamily: fonts.regular,
      fontSize: 12,
    },
    // 14
    support114Regular: {
      color: 'support1',
      fontFamily: fonts.regular,
      fontSize: 14,
    },
    primary114Regular: {
      color: 'primary1',
      fontFamily: fonts.regular,
      fontSize: 14,
    },

    support415regular: {
      color: 'support4',
      fontFamily: fonts.regular,
      fontSize: 15,
    },
    primary314Regular: {
      color: 'primary3',
      fontFamily: fonts.regular,
      fontSize: 14,
    },
    support214Regular: {
      color: 'support2',
      fontFamily: fonts.regular,
      fontSize: 14,
    },

    // 15
    support115Regular: {
      color: 'support1',
      fontFamily: fonts.regular,
      fontSize: 15,
    },
    //21
    primary21bold: {
      color: 'primary',
      fontFamily: fonts.bold,
      fontSize: 21,
    },
    // 24
    tertiary224regular: {
      color: 'tertiary2',
      fontFamily: fonts.regular,
      fontSize: 24,
      lineHeight: 26,
    },
    black24bold: {
      color: 'black',
      fontFamily: fonts.bold,
      fontSize: 24,
      lineHeight: 26,
    },
    // 25
    tertiary225regular: {
      color: 'tertiary2',
      fontFamily: fonts.regular,
      fontSize: 25,
      lineHeight: 25,
    },
    support717regular: {
      color: 'support7',
      fontFamily: fonts.regular,
      fontSize: 17,
    },
    tertiary212regular: {
      color: 'tertiary2',
      fontFamily: fonts.regular,
      fontSize: 12,
    },
    support1112regular: {
      color: 'support11',
      fontFamily: fonts.regular,
      fontSize: 12,
    },
    support820regular: {
      color: 'support8',
      fontFamily: fonts.regular,
      fontSize: 20,
    },
    support820meduim: {
      color: 'support8',
      fontFamily: fonts.medium,
      fontSize: 20,
    },
    primary20regular: {
      color: 'primary',
      fontFamily: fonts.regular,
      fontSize: 20,
    },
    primary113regular: {
      color: 'primary1',
      fontFamily: fonts.regular,
      fontSize: 13,
    },
    supprt1514meduim: {
      color: 'support15',
      fontFamily: fonts.medium,
      fontSize: 14,
    },
    support815regular: {
      color: 'support8',
      fontFamily: fonts.regular,
      fontSize: 15,
    },
    support1115regular: {
      color: 'support11',
      fontFamily: fonts.regular,
      fontSize: 15,
    },
    support1114regular: {
      color: 'support11',
      fontFamily: fonts.regular,
      fontSize: 14,
    },
    support1218regular: {
      color: 'support12',
      fontFamily: fonts.regular,
      fontSize: 18,
    },
    supprort818regular: {
      color: 'support8',
      fontFamily: fonts.regular,
      fontSize: 18,
    },
    support1213regular: {
      color: 'support12',
      fontFamily: fonts.regular,
      fontSize: 13,
    },
    support818medium: {
      color: 'support8',
      fontFamily: fonts.medium,
      fontSize: 18,
    },
    primary18medium: {
      color: 'primary',
      fontFamily: fonts.medium,
      fontSize: 18,
    },
    primary112regular: {
      color: 'primary1',
      fontFamily: fonts.regular,
      fontSize: 12,
    },
    support1115medium: {
      color: 'support11',
      fontFamily: fonts.medium,
      fontSize: 15,
    },
    support825medium: {
      color: 'support8',
      fontFamily: fonts.medium,
      fontSize: 25,
    },
    support815medium: {
      color: 'support8',
      fontFamily: fonts.medium,
      fontSize: 15,
    },
    primary15medium: {
      color: 'primary',
      fontFamily: fonts.medium,
      fontSize: 15,
    },
    support823medium: {
      color: 'support8',
      fontFamily: fonts.medium,
      fontSize: 23,
    },
    support1314regular: {
      color: 'support13',
      fontFamily: fonts.regular,
      fontSize: 14,
    },
    support1317regular: {
      color: 'support13',
      fontFamily: fonts.regular,
      fontSize: 17,
    },
    support1318meduim: {
      color: 'support13',
      fontFamily: fonts.medium,
      fontSize: 18,
    },
    support814regular: {
      color: 'support8',
      fontFamily: fonts.regular,
      fontSize: 14,
    },
    support1514medium: {
      color: 'support15',
      fontFamily: fonts.medium,
      fontSize: 14,
    },
    primary14meduim: {
      color: 'primary',
      fontFamily: fonts.medium,
      fontSize: 14,
    },
    tertiary214regular: {
      color: 'tertiary2',
      fontFamily: fonts.regular,
      fontSize: 14,
    },
    support1113regular: {
      color: 'support11',
      fontFamily: fonts.regular,
      fontSize: 13,
    },
    support1615regular: {
      color: 'support16',
      fontFamily: fonts.regular,
      fontSize: 15,
    },
    support1716regular: {
      color: 'support17',
      fontFamily: fonts.regular,
      fontSize: 16,
    },
  },
});

export type Theme = typeof theme;
export default theme;
