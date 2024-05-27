import {View, Pressable, Text, StyleSheet} from 'react-native';

import Input from '../Input';
import theme from '../../theme';

const styles = StyleSheet.create({
    inputForm:{
        padding: 10,
    },
    button:{
        backgroundColor: theme.colors.primary,
        padding: 15,
        margin: 10,
        borderRadius: 5,
    },
    buttonText:{
        color: theme.colors.white,
        textAlign: 'center',
    },
});

const SignUpForm = ({onSubmit}) => {
    return(
        <View style={styles.inputForm}>
            <Input name='username' placeholder='Username'/>
            <Input name='password' placeholder='Password' secureTextEntry/>
            <Input name='passwordConfirm' placeholder='Confirm password' secureTextEntry/>
            <Pressable onPress={onSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
        </View>
    );
}

export default SignUpForm;