import {View, StyleSheet} from 'react-native';
import RepositoryData from './RepositoryData';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
});

const RepositoryPanel = ({item}) => {
    return (
        <View style={styles.container}>
            <RepositoryData number={item.stargazersCount} text='Stars'testId='stars' />
            <RepositoryData number={item.forksCount} text='Forks' testId='forks'/>
            <RepositoryData number={item.reviewCount} text='Reviews' testId='reviews'/>
            <RepositoryData number={item.ratingAverage} text='Rating' testId='rating'/>
        </View>
    );
}

export default RepositoryPanel;