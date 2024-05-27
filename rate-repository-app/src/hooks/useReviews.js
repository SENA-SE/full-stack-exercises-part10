import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useReviews = (includeReviews = false) => {
  const { data, loading, ...result } = useQuery(GET_AUTHORIZED_USER, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network',
  });
  return { data: data?.authorizedUser, loading, ...result };
}

export default useReviews;