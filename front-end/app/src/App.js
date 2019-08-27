import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import { Router, navigate } from '@reach/router';
import Countries from './Countries/Countries';
import Country from './Country/Country';
import Home from './Home/Home';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';

const Header = styled.header`
  height: 60px;
  margin: 0 auto;
  background-color: #7e77fd;
  color: white !important;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header>
        <Logo src="./logo.png" onClick={e => navigate(`/`)} />
      </Header>
      <Router>
        <Home path="/" />
        <Countries path="/countries" />
        <Country path="/countries/:code" />
      </Router>
    </ApolloProvider>
  );
}

export default App;
