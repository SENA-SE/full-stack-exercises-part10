import { StyleSheet } from "react-native-web";
import { useField } from "formik";
import Text from "./Text";
import TextInput from "./TextInput";
import theme from "../theme";

const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
        color: theme.colors.error,
    },
    inputError: {
        borderColor: theme.colors.error,
    },
    inputDefault: {
        borderColor: theme.colors.textPrimary,
    },
    input: {
        borderColor: theme.colors.textPrimary,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    });

const Input = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            <TextInput
                style={[styles.input,
                    showError ?  styles.inputError:styles.inputDefault ]}
                
                onChangeText={(value) => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default Input;