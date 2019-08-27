import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Country = props => {
  const { code } = props;
  const { loading, error, data } = useQuery(gql`
      {
          country(code: "${code}") {
              name,
              currency,
              phone
          }
      }
    `);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Wrapper>
      <img src={`https://www.countryflags.io/${code}/flat/64.png`}></img>
      <div>Country: {data.country.name}</div>
      <div>Currency: {data.country.currency}</div>
      <div>Phone code: +{data.country.phone}</div>
    </Wrapper>
  );
};

export default Country;
