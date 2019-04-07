import React from 'react';
import { Query } from "react-apollo";
import { GET_CHARACTERS } from "../api/queries";

const List = ({ onCharSelected }) => (
  <Query query={GET_CHARACTERS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (

        <select name="character" onChange={onCharSelected}>
          {data.characters.results.map(char => (
            <option key={char.id} value={char.name}>
              {char.name}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);

export default List;