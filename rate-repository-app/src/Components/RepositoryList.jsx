import { FlatList, View, StyleSheet,Pressable } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useNavigate } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import Text from './Text';

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

// const repositories = [
//   {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in React, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },
//   {
//     id: 'rails.rails',
//     fullName: 'rails/rails',
//     description: 'Ruby on Rails',
//     language: 'Ruby',
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//   },
//   {
//     id: 'django.django',
//     fullName: 'django/django',
//     description: 'The Web framework for perfectionists with deadlines.',
//     language: 'Python',
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//   },
//   {
//     id: 'reduxjs.redux',
//     fullName: 'reduxjs/redux',
//     description: 'Predictable state container for JavaScript apps',
//     language: 'TypeScript',
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//   },
// ];

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
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  // const repositories = data.repositories;
const repositories = data? data.repositories.edges.map(edge => edge.node) : [];
  return (
    <FlatList
      data={repositories}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={item => item.id}
    />

    
  );
};

export const RepositoryListContainer = ({repositories}) => {
  const navigate = useNavigate();
  const onPress = (id) => {
    navigate(`/repository/${id}`);
  };
  return (
    <FlatList
      data={repositories}
      renderItem={({ item }) => <Pressable onPress={() => onPress(item.id)}><RepositoryItem item={item} /></Pressable>}
      keyExtractor={item => item.id}
    />
  );
  
}

export default RepositoryList;