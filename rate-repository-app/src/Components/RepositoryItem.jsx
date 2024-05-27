import {View, StyleSheet, Pressable} from 'react-native';
import theme from '../theme';
import Avatar from './Avatar';
import RepositoryDataPanel from './Repository/RepositoryDataPanel';
import Text from './Text';
import * as Linking from 'expo-linking';
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 10,
        maxWidth: '100%',
    },
    top:{
        display: 'flex',
        flexDirection: 'row',
    },
    linkButton:{
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
    },
    linkText:{
        color: 'white',
        textAlign: 'center',
        fontSize: theme.fontSizes.subheading,

    },
    });

const RepositoryItem = ({item, Visible}) => {
    const openLink = () => {
        Linking.openURL(item.url);
    }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Avatar url={item.ownerAvatarUrl}/>
            </View>
            <RepositoryDataPanel item={item}/>
            {
                Visible && 
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? theme.colors.primary
                            : theme.colors.link
                    },
                    styles.linkButton
                ]} onPress={openLink}>
                    <Text style={styles.linkText}>Open in GitHub</Text>
                </Pressable>
            }
        </View>
    );
}

export default RepositoryItem;