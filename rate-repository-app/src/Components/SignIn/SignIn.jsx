// import Text from "../Text";
import SignInForm from "./SignInForm";
import {View, StyleSheet} from 'react-native';
import { Formik } from "formik";

const styles = StyleSheet.create({
    container:{
        padding:10,

    }
});

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };
    return(
        <View style={styles.container}>
            <Formik initialValues={{username: '', password: ''}} onSubmit={onSubmit}>
                {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
            </Formik>
        </View>
    )
    }
export default SignIn;