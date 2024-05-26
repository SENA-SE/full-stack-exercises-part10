import {View, StyleSheet} from 'react-native';
import theme from '../../theme';

import Tab from './Tab';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        display: 'flex',
        flexDirection: 'row',
    },
    });

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Tab text="Repositories"/>
            <Tab text="Sign in"/>
        </View>
    );
}

export default AppBar;