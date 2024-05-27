import {View, StyleSheet, ScrollView} from 'react-native';
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
            <ScrollView horizontal>
                <Tab />
            </ScrollView>
        </View>
    );
}

export default AppBar;