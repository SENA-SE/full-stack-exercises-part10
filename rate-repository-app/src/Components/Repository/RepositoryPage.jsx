import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import {format} from 'data-fns'
import { GET_REPOSITORY } from '../../graphql/queries';

import theme from '../../theme';
import RepositoryItem from '../RepositoryItem';

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.white,
        display: 'flex',
        flexDirection: 'row',
    },
    separator:{
        height: 10,
    },
    review:{
        display: 'flex',
        flexDirection: 'row',
    },
    reviewRating:{
        borderWidth:2,
        borderColor: theme.colors.primary,
        borderRadius: 50,
        width: 40,
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
    },
    reviewText:{
        marginLeft: 10,
        flex: 1,
        color: theme.colors.textPrimary,
    },
    reviewUsername:{
        fontWeight: theme.fontWeights.bold,
    },
    reviewDate:{
        color: theme.colors.textSecondary,
    },

    });

const RepositoryInfo = ({item}) => {
    return (
        <View style={styles.container}>
            <RepositoryItem item={item} Visible/>
            <View style={styles.separator}/>
        </View>
    );
}

const Review = ({review}) => {
    return (
        <View style={styles.review}>
            <Text style={styles.reviewRating}>{review.rating}</Text>
            <View style={styles.reviewText}>
                <Text style={styles.reviewUsername}>{review.user.username}</Text>
                <Text style={styles.reviewDate}>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
                <Text>{review.text}</Text>
            </View>
        </View>
    );
}

const RepositoryPage = () => {
    const { id } = useParams();
    const { data, loading } = useQuery(GET_REPOSITORY, {
        variables: { id },
        fetchPolicy: 'cache-and-network',
    });

    if (loading) return <Text>Loading...</Text>;

    const repository = data.repository;

    const reviews = repository.reviews.edges.map(edge => edge.node);

    return (
        <FlatList
            data = {reviews}
            renderItem={({item}) => <Review review={item}/>}
            keyExtractor={({id}) => id}
            ListHeaderComponent={() => <RepositoryInfo item={repository}/>}
            style={{padding: 10}}
            />
    );
}

export default RepositoryPage;