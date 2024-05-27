import { View, StyleSheet, } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { sortOption } from '../utils/sortOption';
import { useDebounce } from 'use-debounce';

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

// const OrderPicker = ({order, setOrder}) => {
//   return(
//     <Picker
//       selectedValue={order}
//       onValueChange={(itemValue) => setOrder(itemValue)}
//     >
//       {sortOption.map(option => <Picker.Item key={option.id} label={option.label} value={option.value}/>)}
//     </Picker>
//   );
// }

const RepositoryList = () => {

  const [order, setOrder] = useState(sortOption[0].value);
  const [searchQuery, setSearchQuery] = useState('');
  const [queryText] = useDebounce(searchQuery, 500);

  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {orderBy: order, searchKeyword: queryText}
  });

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  
  const onPress = (id) => {
    navigate(`/repository/${id}`);
  }
  const onSearchChange = (query) => {
    setSearchQuery(query);
  }
  const onSortOptionChange = (option) => {
    setOrder(option);
  }
const repositories = data? data.repositories.edges.map(edge => edge.node) : [];
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