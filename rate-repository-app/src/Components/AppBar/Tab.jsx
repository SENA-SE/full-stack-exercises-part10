import {View, StyleSheet, Text, Pressable} from 'react-native';
// import { Link } from 'react-router-native';
import { useQuery, useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { GET_AUTHORIZED_USER } from '../../graphql/queries';

import theme from '../../theme';
import AuthStorage from '../../utils/authStorage';
import Link from './Link';
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

        const navigate = useNavigate();

        const signOut = async () => {
            await authStorage.removeAccessToken();
            apolloClient.resetStore();
            navigate('/signin');
        };
        return (
            <View style={styles.container}>
                <Link route='/' text='Repositories'/>
                {authorizedUser && <Link route='/createReview' text='Create a Review'/>}

                {
                    authorizedUser ? 
                    <Button onPress={signOut} >
                        <Text style={styles.button}>Sign Out</Text>
                    </Button>
                    :
                    <>
                        <Link route='/signin' text='Sign In'/>
                        <Link route='/newreview' text='Create a Review'/>
                        <Link route='/myreviews' text='My Reviews'/>
                    </>
                }
                {/* </Pressable> */}
            </View>
        );
    }

    export default Tab;