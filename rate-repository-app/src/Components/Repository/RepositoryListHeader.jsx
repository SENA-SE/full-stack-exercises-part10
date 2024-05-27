import {View, StyleSheet,} from 'react-native';
import {Searchbar} from 'react-native-paper';
import { Picker } from 'react-native-web';
import { sortOption } from '../../utils/sortOption';

const styles = StyleSheet.create({
    searchBar:{
        padding: 10,
    },
    picker:{
        padding: 10,
    },
});

const RepositoryListHeader = ({setSearchQuery, searchQuery, setSortBy, sortBy}) => {
    return(
        <View>
            <Searchbar
                placeholder='Search'
                onChangeText={(query) => setSearchQuery(query)}
                value={searchQuery}
                style={styles.searchBar}
            />
            <Picker
                selectedValue={sortBy}
                onValueChange={(itemValue) => setSortBy(itemValue)}
                style={styles.picker}
            >
                {sortOption.map(option => <Picker.Item key={option.value} label={option.label} value={option.value}/>)}
            </Picker>
        </View>
    );
}
export default RepositoryListHeader;