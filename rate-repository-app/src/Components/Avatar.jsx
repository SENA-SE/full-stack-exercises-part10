import {Image, StyleSheet,} from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    avatar:{
        width: theme.avatarImage.width,
        height: theme.avatarImage.height,
        borderRadius: theme.avatarImage.borderRadius,
        flexGrow: 0,
    },
});

const Avatar = ({url}) => {
    return (
        <Image style={styles.avatar} source={{uri: url}}/>
    );
}

export default Avatar;