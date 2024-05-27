import { useMutation, useApolloClient } from "@apollo/client";
import {AUTHENTICATE} from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        const credentials = { username, password };
        const res = await mutate({ variables: { credentials } });
        await authStorage.setAccessToken(res.data.authorize.accessToken);
        apolloClient.resetStore();
        return res;
    }
    return [signIn, result];
}

export default useSignIn;