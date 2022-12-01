import React from "react";
import { useQuery } from "react-query";
import { getUpComing } from "../api/tmdb-api"
import Spinner from '../components/spinner';
import PageTemplate from '../components/templateMovieListPage';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TopRelatedMoviesPage = (props) => {

    const { data, error, isLoading, isError } = useQuery("upcoming", getUpComing)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    return (
        <PageTemplate
            title="Top Related Movies"
            movies={movies}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
    );
};

export default TopRelatedMoviesPage;