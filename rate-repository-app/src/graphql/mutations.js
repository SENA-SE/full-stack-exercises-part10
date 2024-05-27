import { gql } from "@apollo/client";
export const AUTHENTICATE = gql`
mutation authenticate($credentials: AuthenticateInput){
    authorize(credentials: $credentials){
        accessToken
    }
}
`;

export const CREATE_REVIEW = gql`
mutation createReview($review: CreateReviewInput){
    createReview(review: $review){
        repositoryId,
        rating
        createdAt
        text
        
        user{
            id
            username
        }
    }
}
`;

export const CREATE_USER = gql`
mutation createUser($user: CreateUserInput){
    createUser(user: $user){
        id
        username
        reviewCount
        createdAt
    }
}
`;

export const DELETE_REVIEW = gql`
mutation deleteReview($id: ID!){
    deleteReview(id: $id)
}
`;