import React from "react";
import Film from "./Film";

const FilmList = ({ films }) => {

    const filmNodes = films.map((film) => {
        return (
            <Film film={film} key={film.id} />
        )
    });


    return (
        <>
            <h1>Upcoming UK Releases!</h1>
            {filmNodes}
        </>
    )
}


export default FilmList