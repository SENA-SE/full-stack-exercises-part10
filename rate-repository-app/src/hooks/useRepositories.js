import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables,
    });

    return {
        repositories: data ? data.repositories : undefined,
        fetchMore: fetchMore,
        loading,
        ...result,
    };
}

export default useRepositories;