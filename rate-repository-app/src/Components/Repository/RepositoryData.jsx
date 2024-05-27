import {View, StyleSheet} from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
    number:{
        color: theme.colors.dataValue,
        fontWeight: theme.fontWeights.bold,
        textAlign: 'center',
    },
    text:{
        color: theme.colors.dataText,
        textAlign: 'center',
    },
    }
);

const RepositoryData = ({number, text, testId}) => {
    const formattedData = number > 1000 ? `${(number / 1000).toFixed(1)}k` : number;
    return (
        <View testID={testId}>
            <Text style={styles.number}>{formattedData}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default RepositoryData;