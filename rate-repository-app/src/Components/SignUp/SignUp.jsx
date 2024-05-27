
import { Formik } from 'formik';
import { useNavigate } from 'react-router-native';
import * as Yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import SignUpForm from './SignUpForm';



const initialValues = {
    username: '',
    password: '',
    passwordConfirm: ''
};

const validationSchema = Yup.object().shape({
    username: Yup.string().min(1).max(30).required('Username is required'),
    password: Yup.string().min(5).max(50).required('Password is required'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirmation is required')
});

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try{
            await signUp({ username, password });
            await signIn({ username, password });
            navigate('/');
        } catch(e){
            console.log(e);
        }
    }

    return(
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit}/>}
        </Formik>
    );
}

export default SignUp;
