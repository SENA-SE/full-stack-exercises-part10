import {View, StyleSheet, Text,} from 'react-native';
import { Link } from 'react-router-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        color: theme.colors.textPrimary,
        padding: 10,
    },
    text:{
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.subheading,
    }
    });

    const Tab = ({text}) => {
        return (
            <View style={styles.container}>
                {/* <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? theme.colors.primary
                            : theme.colors.white
                    },
                    styles.button
                ]}> */}
                <Link to='/' underlayColor={theme.colors.link}>
                    <Text style={[styles.text, styles.button]}>Repositories</Text>
                </Link>
                <Link to='/signin' underlayColor={theme.colors.link}>
                    <Text style={[styles.text, styles.button]}>Sign in</Text>
                </Link>
                    
                <Text style={styles.text}>{text}</Text>
                {/* </Pressable> */}
            </View>
        );
    }

    export default Tab;