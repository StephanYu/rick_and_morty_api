import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo';
import { GET_CHARACTERS } from "../api/queries";

const Main = ({ data }) => {
  let { loading, error, characters } = data;
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  let content = characters.results.map((character) => {
    return <div>{character.name}</div>
  });

  return (
    <React.Fragment>
    {content}
    </React.Fragment>
  )
};

Main.propTypes = {
  data: PropTypes.object
}

const fetchCharacters = graphql(GET_CHARACTERS);

export default fetchCharacters(Main);