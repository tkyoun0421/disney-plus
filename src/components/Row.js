import axios from '../api/axios';
import React, { useCallback, useEffect, useState } from 'react';

const Row = ({ title, id, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    const fetchMovieData = useCallback(async () => {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
    }, [fetchUrl]);

    useEffect(() => {
        fetchMovieData();

        return () => {};
    }, [fetchMovieData]);

    return <div>Row</div>;
};

export default Row;
