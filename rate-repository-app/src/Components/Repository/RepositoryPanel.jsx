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
            <RepositoryData number={item.stargazersCount} text='Stars' />
            <RepositoryData number={item.forksCount} text='Forks' />
            <RepositoryData number={item.reviewCount} text='Reviews' />
            <RepositoryData number={item.ratingAverage} text='Rating' />
        </View>
    );
}

export default RepositoryPanel;