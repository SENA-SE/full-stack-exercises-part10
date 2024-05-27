import { Platform } from "react-native";
const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      white: '#ffffff',
      black: '#000000',
      dataValue: '#0366d6',
      dataText: '#586069',
      link: '#0366d6',
      error: '#d73a4a',
    },
    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    bgColor:{
      main:'#e1e4e8',
      appBar:'#24292e',
      button:'#0366d6',
    }
  };
  
  export default theme;