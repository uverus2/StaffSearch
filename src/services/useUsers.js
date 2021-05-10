import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useUsers() {
    const [users, setUsers] = useState([]), [loading, setLoading] = useState(true), [errors, setErrors] = useState([]), [resultIndex, setResultIndex] = useState(1);

    //To-Do
    // Add A spinner
    // Parse errors on front end

    const retriveUsers = useCallback(async(loadMore) => {
        try {
            const url = "https://randomuser.me/api/";
            let response = await axios.get(`${url}?results=10&page=${resultIndex}`);

            if (loadMore) {
                const loadedMoreResults = [...users, ...response.data.results];
                setUsers(loadedMoreResults);
            } else {
                setUsers(response.data.results);
            }

        } catch (e) {
            setErrors(e);
        }
    });

    useEffect(() => {
        // Self involking function because I will need this code only once
        (async() => {
            try {
                await retriveUsers(false);
            } catch (e) {
                console.log(e);
            }

        })();
    }, []);

    const loadMoreUsers = async() => {
        setResultIndex(resultIndex + 1);
        await retriveUsers(true);
    }

    return { loading, users, errors, resultIndex, loadMoreUsers }
};