import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
// import {format} from 'data-fns'
import { GET_REPOSITORY } from '../../graphql/queries';

import theme from '../../theme';
import RepositoryItem from '../RepositoryItem';
import ReviewItem from '../ReviewItem';

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.white,
        display: 'flex',
        flexDirection: 'row',
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
            renderItem={({item}) => <ReviewItem review={item}/>}
            keyExtractor={({id}) => id}
            ListHeaderComponent={() => <RepositoryInfo item={repository}/>}
            style={{padding: 10}}
            />
    );
}

export default RepositoryPage;