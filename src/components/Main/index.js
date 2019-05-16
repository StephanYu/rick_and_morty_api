import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { GET_CHARACTERS } from "../../api/queries"
import Hero from "./Hero"
import CharactersCollection from "./CharactersCollection"

const Main = ({ data }) => {
  let { loading, error, characters } = data
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  return (
    <React.Fragment>
      <Hero />
      <CharactersCollection characters={characters}/>
    </React.Fragment>
  )
}

Main.propTypes = {
  data: PropTypes.object
}

const fetchCharacters = graphql(GET_CHARACTERS)

export default fetchCharacters(Main)