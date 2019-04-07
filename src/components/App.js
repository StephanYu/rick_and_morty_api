import React from 'react';
import './App.css';
import { ApolloProvider } from "react-apollo";
import Main from "./Main";
import Navbar from "./Navbar";
// import List from "./List";

const App = ({ graphqlClient }) => {
  return (
    <ApolloProvider client={graphqlClient}>
      <Navbar />
      {/* Main uses the Higher order component pattern to fetch data */}
      <Main />
      {/* Alternative way to fetch data via render props pattern with the below List component*/}
      {/* <List /> */}
    </ApolloProvider>
  );
}

export default App;
