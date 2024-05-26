import { View, StyleSheet, Text } from 'react-native';
import RepositoryList from './Components/RepositoryList';
import AppBar from './Components/AppBar/AppBar';

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
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