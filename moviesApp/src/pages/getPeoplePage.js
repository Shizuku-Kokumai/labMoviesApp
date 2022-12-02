import React from "react";
import { useQuery } from "react-query";
import { getPeople } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import PeopleTemplate from '../components/templatePeoplePage';
//import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const GetPeoplePage = (props) => {

    const { data, error, isLoading, isError } = useQuery("people", getPeople)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const people = data.results;

    return (
        <PeopleTemplate
            title="Popular People"
            people={people}
        />
    );
};

export default GetPeoplePage;