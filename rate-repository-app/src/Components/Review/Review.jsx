import {View, Text, StyleSheet, Alert} from 'react-native';
import {format} from 'date-fns';
import {Link } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../../graphql/mutations';
import theme from '../../theme';
const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: 'white',
        flexDirection:'row'
    },
    reviewContainer:{
        marginLeft: 10,
        flexShrink: 1,
    },
    rating:{
        color: theme.colors.primary,
        fontWeight: 'bold',
    },
    
    
});

const Review = ({review, showName = false, refetch}) => {
    const [deleteReview] = useMutation(DELETE_REVIEW);
    const handleDelete = async () => {
        const res = await deleteReview({variables: {id: review.id}});
        if(res.data.deleteReview){
            refetch();
        }
    };

    const alert = () => {
        Alert.alert(
            'Delete review',
            'Are you sure to delete this review?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: handleDelete,
                },
            ]
        );
    }


    return(
        <View style={styles.container}>
            <View style={styles.reviewContainer}>
                <Text style={styles.rating}>{review.rating}</Text>
                <Text>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
                <Text>{review.text}</Text>
            </View>
            {showName && <Link to={`/repository/${review.repository.id}`}><Text>{review.repository.fullName}</Text></Link>}
            <Text onPress={alert}>Delete</Text>
        </View>
    );
}

export default Review;
