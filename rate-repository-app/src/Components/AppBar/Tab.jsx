import {View, StyleSheet, Text, Pressable} from 'react-native';
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
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? theme.colors.primary
                            : theme.colors.white
                    },
                    styles.button
                ]}>
                    
                <Text style={styles.text}>{text}</Text>
                </Pressable>
            </View>
        );
    }

    export default Tab;