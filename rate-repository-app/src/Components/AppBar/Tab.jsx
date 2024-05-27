import {View, StyleSheet, Text, Pressable} from 'react-native';
import { Link } from 'react-router-native';
import { useQuery, useApolloClient } from '@apollo/client';
import AuthStorage from '../../utils/authStorage';
import { GET_AUTHORIZED_USER } from '../../graphql/queries';

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
    }, 
    link:{
        color: theme.colors.link,
    }
    });

    const Button = ({text, onPress}) => {
        return (
            <Pressable onPress={onPress}>
                <Text style={styles.button}>{text}</Text>
            </Pressable>
        );
    }

    const Tab = () => {
        const authStorage = new AuthStorage();
        const apolloClient = useApolloClient();
        const { data } = useQuery(GET_AUTHORIZED_USER);
        const authorizedUser = data ? data.authorizedUser : undefined;

        const signOut = async () => {
            await authStorage.removeAccessToken();
            apolloClient.resetStore();
        };
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
                    <Text style={styles.link}>Repositories</Text>
                </Link>
                {
                    authorizedUser ? 
                    <Button onPress={signOut} >
                        <Text style={styles.button}>Sign Out</Text>
                    </Button>
                    :
                    <Link to='/signin' underlayColor={theme.colors.link}>
                        <Text style={styles.link}>Sign In</Text>
                    </Link>
                }
                {/* </Pressable> */}
            </View>
        );
    }

    export default Tab;