import {View, Text, Pressable, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-native';
import * as Yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import theme from '../theme';
import Input from './Input';

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    review: '',
};

const styles = StyleSheet.create({
    container:{
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
    error:{
        color: theme.colors.error,
        textAlign: 'center',
    },
});

const reviewSchema = Yup.object().shape({
    ownerName: Yup.string().required('Repository owner name is required'),
    repositoryName: Yup.string().required('Repository name is required'),
    rating: Yup.number().min(0).max(100).required('Rating is required'),
    review: Yup.string(),
});

const ReviewForm = ({ onSubmit, error }) => {
    return(
        <View style={styles.container}>
            <Input name='ownerName' placeholder='Repository owner name'/>
            <Input name='repositoryName' placeholder='Repository name'/>
            <Input name='rating' placeholder='Rating between 0 and 100'/>
            <Input name='review' placeholder='Review' multiline/>
            <Pressable onPress={onSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Create a review</Text>
            </Pressable>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const NewReview = () => {
    const [createReview] = useCreateReview();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, review } = values;
        try {
            const res = await createReview({ ownerName, repositoryName, rating, review });
            console.log(res);
            setError(null);
            navigate(`/repository/${res.data.createReview.repositoryId}`);
        }
        catch (e) {
            setError(e.message);
        }
    }

    return (
        <View>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={reviewSchema}>
                {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} error={error} />}
            </Formik>
        </View>
    );
}

export default NewReview;