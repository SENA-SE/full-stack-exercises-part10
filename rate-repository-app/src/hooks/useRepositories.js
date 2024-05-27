import { useEffect, useState } from "react";
const baseUrl = 'http://192.168.1.103:8081';

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    const [loading, setLoading] = useState(false);

    const fetchRepositories = async () => {
        setLoading(true);
        const response = await fetch(`${baseUrl}/repositories`);
        const json = await response.json();
        setLoading(false);
        setRepositories(json);
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;