import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useUsers() {
    const [users, setUsers] = useState([]),
          [searchUsers, setSearchUsers] = useState([]),
          [loading, setLoading] = useState(true), 
          [errors, setErrors] = useState({}),
          [resultIndex, setResultIndex] = useState(1);

    const retriveUsers = useCallback(async(loadMore) => {
        try {
            const url = "https://randomuser.me/api/";
            let response = await axios.get(`${url}?results=10&page=${resultIndex}&nat=us,au,no,ie,nl,dk,fr,gb`);

            //If the load more flag is true then we retrive and add more results
            if (loadMore) {
                //Combine results with new additional results
                const loadedMoreResults = [...users, ...response.data.results];
                setUsers(loadedMoreResults);
            } else {
                setUsers(response.data.results);
            }

            //2s delay on the loading so the Spinner can be seen
            setTimeout(() => {
                setLoading(false);
            }, 2000);

        } catch (e) {
            const errorObject = {
                message: e.message,
                statusCode: e?.response?.status || false,
                additionalData: e?.response?.data || false
            }

            setErrors(errorObject);
            setLoading(false);
        }
    });

    useEffect(() => {
        // Self invoking function because I will need this code only once
        (async() => {
            try {
                await retriveUsers(false);
            } catch (e) {
                console.log(e);
            }

        })();
    }, []);

    const loadMoreUsers = async() => {
        setLoading(true);
        setResultIndex(resultIndex + 1);
        await retriveUsers(true);
    }


    return { loading, users, errors, searchUsers, setErrors, loadMoreUsers, setSearchUsers }
};