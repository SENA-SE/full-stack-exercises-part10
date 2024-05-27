import { View, StyleSheet, } from 'react-native';

import { useNavigate } from 'react-router-native';
import { useState, useEffect } from 'react';
import { sortOption } from '../utils/sortOption';
import { useDebounce } from 'use-debounce';
import useRepositories from '../hooks/useRepositories';

import Text from './Text';
import RepositoryListContainer from './Repository/RepositoryListContainer';

const styles = StyleSheet.create({
  text:{
    backgroundColor: 'white',
    textAlign: 'center',
  },
  loadingText:{
    backgroundColor: 'white',
    textAlign: 'center',
  },
});


export const Loading = () => {
  return(
    <View>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const Error = ({message}) => {
  return(
    <View>
      <Text style={[styles.text, {color:'red'}]}>{message}</Text>
    </View>
  );
}


const RepositoryList = () => {

  const [order, setOrder] = useState(sortOption[0].value);
  const [searchQuery, setSearchQuery] = useState('');
  const [queryText] = useDebounce(searchQuery, 500);
  const [variables, setVariables] = useState({orderBy: order, searchKeyword: queryText});

  const navigate = useNavigate();
  const {repositories, loading, error} = useRepositories(variables);


  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  
  const onPress = (id) => {
    navigate(`/repository/${id}`);
  }
  const onSearchChange = (query) => {
    setSearchQuery(query);
  }

  const onSortOptionChange = (value) => {
    setOrder(value);
    setVariables({...variables, orderBy: value});
  }

  useEffect(() => {
    setVariables({...variables, searchKeyword: queryText});
  }, [queryText]);

// const repositories = data? data.repositories.edges.map(edge => edge.node) : [];
  return (
    <RepositoryListContainer
      repositories={repositories}
      onPress={onPress}
      onSearchChange={onSearchChange}
      onSortOptionChange={onSortOptionChange}
      order={order}
      searchQuery={searchQuery}
      loading={loading}

    />
    
  );
};



export default RepositoryList;