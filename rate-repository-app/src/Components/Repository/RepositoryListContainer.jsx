import {View, StyleSheet, Pressable, Text, FlatList} from 'react-native';
import React from 'react';
import RepositoryItem from '../RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';
// import { RepositoryListContainer } from '../RepositoryList';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    container: {
        backgroundColor: 'white',
        padding: 10,
    },
    loadingText:{
        backgroundColor: 'white',
        textAlign: 'center',
    },

});

const ItemSeparator = () => <View style={styles.separator}/>;

const RepositoryListContainer = ({repositories, onEndReach, loading, setSearchQuery, searchQuery, setSortBy, sortBy}) => {
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return(
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={
                <RepositoryListHeader
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                    setSortBy={setSortBy}
                    sortBy={sortBy}
                />
            }
            renderItem={({item}) => (
                <Pressable onPress={() => console.log(item.id)}>
                    <RepositoryItem item={item}/>
                </Pressable>
            )}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
                loading
                ? <Text style={styles.loadingText}>Loading...</Text>
                : null
            }
        />
    );
};

export default RepositoryListContainer;

