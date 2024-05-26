import { View, StyleSheet, Text } from 'react-native';
import RepositoryList from './Components/RepositoryList';

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#e1e4e8',
    },
    });

const Main = () => {
    return (
        <View style={style.container}>
            <Text>Rate Repository Application</Text>
            <RepositoryList />
        </View>
    );
};

export default Main;