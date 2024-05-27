import { View, StyleSheet, Text } from 'react-native';
import RepositoryList from './Components/RepositoryList';
import AppBar from './Components/AppBar/AppBar';

const style = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#e1e4e8',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    });

const Main = () => {
    return (
        <View style={style.container}>
            <Text>Rate Repository Application</Text>
            <AppBar/>
            <RepositoryList />
        </View>
    );
};

export default Main;