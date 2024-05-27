import {View, StyleSheet} from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import RepositoryPanel from './RepositoryPanel';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems:'flex-start',
        flexGrow: 1,
        flexShrink: 1,
        padding: 10,

    },
    description:{
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.subheading,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
        marginBottom: 10,
    },
    language:{
        backgroundColor: theme.colors.primary,
        color: theme.colors.textPrimary,
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
});

const RepositoryDataPanel = (props) => {
    const {fullName, description, language} = props.item;
    return (
        <View style={styles.container}>
            <Text  testId='name'>{fullName}</Text>
            <Text style={styles.description} testId='description'>{description}</Text>
            <Text style={styles.language} testId='language'>{language}</Text>
            <RepositoryPanel item={props.item}/>
        </View>
    );
}

export default RepositoryDataPanel;