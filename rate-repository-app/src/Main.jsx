import { View, StyleSheet, Text } from 'react-native';
import {Route, Routes} from 'react-router-native';
import RepositoryList from './Components/RepositoryList';
import AppBar from './Components/AppBar/AppBar';
import SignIn from './Components/SignIn';

const style = StyleSheet.create({
    container: { 
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
            <Routes>
                <Route path='/' element={<RepositoryList/>}/>
                <Route path='/signin' element={<SignIn/>}/>
            </Routes>
        </View>
    );
};

export default Main;