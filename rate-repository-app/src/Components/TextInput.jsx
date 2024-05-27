import { TextInput as NativeInput } from "react-native-web";

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  if (error) {
    // textInputStyle.push(styles.errorBorder);
  }

  return <NativeInput style={textInputStyle} {...props} />;
}

export default TextInput;