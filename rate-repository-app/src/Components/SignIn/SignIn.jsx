// import Text from "../Text";
import SignInForm from "./SignInForm";
import {View, StyleSheet} from 'react-native';
import { Formik } from "formik";
import * as Yup from 'yup';

const styles = StyleSheet.create({
    container:{
        padding:10,

    }
});
const SignInSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };
    return(
        <View style={styles.container}>
            <Formik initialValues={{username: '', password: ''}} onSubmit={onSubmit}
                validationSchema={SignInSchema}
            >
                {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
            </Formik>
        </View>
    )
    }
export default SignIn;