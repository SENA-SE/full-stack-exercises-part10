import { gql } from "@apollo/client";
import {REPOSITORY_DETAILS} from './fragments';

export const GET_REPOSITORIES = gql`
query {
    repositories {
        edges {
            node {
                ...RepositoryDetails
            }
        }
    }
}
${REPOSITORY_DETAILS}
`;

export const GET_AUTHORIZED_USER = gql`
query {
    authorizedUser {
        userName,
        createdAt,
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

