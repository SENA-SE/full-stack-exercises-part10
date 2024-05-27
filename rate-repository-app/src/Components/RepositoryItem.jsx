import {View, StyleSheet,} from 'react-native';

import Avatar from './Avatar';
import RepositoryDataPanel from './Repository/RepositoryDataPanel';

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 10,
        maxWidth: '100%',
    },
    top:{
        display: 'flex',
        flexDirection: 'row',
    },
    });

const RepositoryItem = ({item}) => {
    console.log(item)
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Avatar url={item.ownerAvatarUrl}/>
            </View>
            <RepositoryDataPanel item={item}/>
        </View>
    );
}

export default RepositoryItem;