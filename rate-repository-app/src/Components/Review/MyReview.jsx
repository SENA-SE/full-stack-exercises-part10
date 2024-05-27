import {View, Text, AcitivityIndicator, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../../graphql/queries';
import ReviewItem from './Review';

const Loading = () => {
    return (
        <View>
            <AcitivityIndicator size='large'/>
        </View>
    );
}

const ReviewList = ({reviews, loading}) => {
    const reviewNodes = reviews ? reviews.edges.map(edge => edge.node) : [];
    return (
        <FlatList
            data={reviewNodes}
            renderItem={({item}) => <ReviewItem review={item} showName/>}
            keyExtractor={({id}) => id}
            ListEmptyComponent = {
                loading? <Loading/> : <Text>No reviews</Text>
            }
        />

    );
}
const MyReview = () => {
    const { data, loading } = useQuery(GET_AUTHORIZED_USER, {
        variables: { includeReviews: true },
        fetchPolicy: 'cache-and-network',
    });
    const reviews = data?.authorizedUser.reviews? data.authorizedUser.reviews : [];
    return (
        <ReviewList reviews={reviews} loading={loading}/>
    );
}

export default MyReview;
