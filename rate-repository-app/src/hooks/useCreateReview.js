import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
        const review = { ownerName, repositoryName, rating, text };
        const res = await mutate({ variables: { review } });
        return res;
    }
    return [createReview, result];
}

export default useCreateReview;