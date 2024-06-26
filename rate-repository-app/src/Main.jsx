import { View, StyleSheet, Text } from 'react-native';
import {Route, Routes} from 'react-router-native';
import RepositoryList from './Components/RepositoryList';
import AppBar from './Components/AppBar/AppBar';
import SignIn from './Components/SignIn/SignIn';
import RepositoryPage from './Components/Repository/RepositoryPage';
import SignUp from './Components/SignUp/SignUp';
import MyReview from './Components/Review/MyReview';
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
                <Route path='/repository/:id' element={<RepositoryPage />} />
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/myreviews' element={<MyReview />} />
            </Routes>
        </View>
    );
};

export default Main;