import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { navigate } from '@reach/router';
import styled from 'styled-components';

const Tr = styled.tr`
  cursor: pointer;
  background-color: white;
  &:hover {
    opacity: 0.5;
  }
`;

const Td = styled.td`
  border: none;
  border-spacing: 0;
  height: 40px;
  padding: 10px;
`;

const Th = styled.th`
  color: #a6b2d4;
`;

const Table = styled.table`
  border-spacing: 0 5px;
`;

const TablePadding = styled.div`
  padding: 3em;
`;

const Wrapper = styled.div`
  background-color: #f5f7fc;
`;

const Countries = () => {
  const headers = ['country', 'continent', 'languages'];
  const { loading, error, data } = useQuery(gql`
    {
      countries {
        name
        code
        continent {
          name
        }
        languages {
          name
          native
        }
      }
    }
  `);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Wrapper>
      <TablePadding>
        <Table>
          <thead>
            <tr>
              {headers.map(header => (
                <Th key={header}>{header}</Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.countries.map(country => (
              <Tr
                key={country.name}
                onClick={e => navigate(`/countries/${country.code}`)}
              >
                <Td>{country.name}</Td>
                <Td>{country.continent.name}</Td>
                <Td>
                  {country.languages
                    .map(language => `(${language.name}, ${language.native})`)
                    .join(', ')}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TablePadding>
    </Wrapper>
  );
};

export default Countries;
