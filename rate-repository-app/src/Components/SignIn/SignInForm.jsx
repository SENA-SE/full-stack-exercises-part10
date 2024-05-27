import {View, StyleSheet, Pressable} from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import Input from '../Input';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        color: theme.colors.textPrimary,
        padding: 10,
    },
    text:{
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.subheading,
    }, 
    errorText: {
        marginTop: 5,
        color: theme.colors.error,
    },
    });

const SignInForm = ({onSubmit, error}) => {
    return (
        <View style={styles.container}>
            <Input name='username' placeholder='Username'/>
            <Input name='password' placeholder='Password'/>
            <Pressable onPress={onSubmit}>
                <Text style={[styles.text, styles.button]}>Sign in</Text>
            </Pressable>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

export default SignInForm;