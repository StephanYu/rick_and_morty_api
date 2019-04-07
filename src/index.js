import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ApolloClient } from "apollo-client";
import { BatchHttpLink } from "apollo-link-batch-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import * as serviceWorker from './serviceWorker';

const configLink = {
  uri: "https://rickandmortyapi.com/graphql"
};
const link = new BatchHttpLink(configLink);
const graphqlClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(<App graphqlClient={graphqlClient}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
