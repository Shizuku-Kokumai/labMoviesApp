import React from "react";
import { useQuery } from "react-query";
import { getPopular } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import PageTemplate from '../components/templateMovieListPage';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const PopularMoviesPage = (props) => {
    
    const { data, error, isLoading, isError } = useQuery('discover', getPopular)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    
    const movies = data.results;

    return (
        <PageTemplate
            title="Most Popular Movies"
            movies={movies}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
    );
};

export default PopularMoviesPage;