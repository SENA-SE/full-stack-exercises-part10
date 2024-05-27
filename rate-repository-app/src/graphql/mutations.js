import { gql } from "@apollo/client";
export const AUTHENTICATE = gql`
mutation authenticate($credentials: AuthenticateInput){
    authorize(credentials: $credentials){
        accessToken
    }
}
`;
