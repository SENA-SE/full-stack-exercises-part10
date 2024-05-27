import { gql } from "@apollo/client";
import {REPOSITORY_DETAILS} from './fragments';



export const GET_AUTHORIZED_USER = gql`
query User($includeReviews: Boolean = false){
    authorizedUser {
        id
        username
        reviews @include(if: $includeReviews){
            edges {
                node {
                    id
                    text
                    rating
                    createdAt
                    repositoryId
                    repository {
                        id
                        fullName
                    }
                }
            }
        }
    }
}
`;

export const GET_REPOSITORY = gql`
query repository($id: ID!){
    repository(id: $id){
        ...RepositoryDetails
    }
    url
    reviews {
        edges {
            node {
                id
                text
                rating
                createdAt
                user {
                    id
                    username
                }
            }
        }
    }
}
${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORIES = gql`
query repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword:String){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, $searchKeyword:String){
        edges {
            cursor
            node {
                ...RepositoryDetails
            }
        }
    
    }
    ${REPOSITORY_DETAILS}
}`