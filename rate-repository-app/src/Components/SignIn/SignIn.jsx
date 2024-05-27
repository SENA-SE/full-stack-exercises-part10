// import Text from "../Text";
import SignInForm from "./SignInForm";

import {View, StyleSheet} from 'react-native';
import { Formik } from "formik";
import { useState } from "react";
import useSignIn from "../../hooks/useSignIn";
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
    const [signIn] = useSignIn();
    const [error, setError] = useState(null);

    const onSubmit = async (values) => {
        const {username, password} = values;
        try{
            const res = await signIn({username, password});
            console.log(res)
            setError(null)
        }catch(e){
            setError(e.message);
        }
    };
    return(
        <View style={styles.container}>
            <Formik initialValues={{username: '', password: ''}} onSubmit={onSubmit}
                validationSchema={SignInSchema}
            >
                {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} error={error}/>}
            </Formik>
        </View>
    )
    }
export default SignIn;