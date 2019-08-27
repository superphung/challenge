import React from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';

const Button = styled.button`
  color: #506488;
  font-size: 2em;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  cursor: pointer;
  animation: move 2.5s linear infinite;

  @keyframes move {
    0%,
    100% {
      top: 40%;
    }
    50% {
      top: 45%;
    }
  }
`;

const Home = () => {
  return (
    <div>
      <Button onClick={e => navigate(`/countries`)}>SEARCH COUNTRIES</Button>
    </div>
  );
};

export default Home;
