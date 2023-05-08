import {Alert, ToastAndroid} from 'react-native';
const warn = 'The name must be longer than 3 characters';

export const reactNativeAlert = () => {
  return Alert.alert(
    'Warning',
    warn,
    [
      {
        text: 'Do not show again',
        onPress: () => console.warn('Ok Pressed'),
      },
      {text: 'Cancel', onPress: () => console.warn('Ok Pressed')},
      {text: 'Ok', onPress: () => console.warn('Ok Pressed')},
    ],
    {
      cancelable: true,
      onDismiss: () => {
        console.warn('Alert dismissed');
      },
    },
  );
};

export const reactNativeToast = () => {
  return ToastAndroid.show(warn, ToastAndroid.LONG);
};
