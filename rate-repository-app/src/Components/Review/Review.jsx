import {View, Text, StyleSheet, } from 'react-native';
import {format} from 'date-fns';
import theme from '../../theme';
const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: 'white',
        flexDirection:'row'
    },
    reviewContainer:{
        marginLeft: 10,
        flexShrink: 1,
    },
    rating:{
        color: theme.colors.primary,
        fontWeight: 'bold',
    },
    
    
});

const ReviewItem = ({review, showName}) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.rating}>{review.rating}</Text>
            </View>
            <View style={styles.reviewContainer}>
                {showName && <Text>{review.user.username}</Text>}
                <Text>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
                <Text>{review.text}</Text>
            </View>
        </View>
    );
}

export default ReviewItem;
