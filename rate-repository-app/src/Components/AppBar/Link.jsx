import {Text, StyleSheet} from 'react-native';
import { Link as NativeLink } from 'react-router-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    text:{
        color: theme.colors.link,
    },
});

const Link = ({route, text})   => {
    return (
        <NativeLink to={route}>
            <Text style={styles.text}>{text}</Text>
        </NativeLink>
    );
}

export default Link;