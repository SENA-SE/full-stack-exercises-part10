import { useMutation, useApolloClient } from "@apollo/client";
import {AUTHENTICATE} from "../graphql/mutations";
const useSignIn = () => {
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        const credentials = { username, password };
        const response = await mutate({ variables: { credentials } });
        return response;
    };
    return [signIn, result];
}

export default useSignIn;