import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const query = gql`
{
  houses {
    id
    name
    points
  }
}
`

const Points = () => (
  <Query
    query={query}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      if(data && data.houses) {
        return data.houses.map(({ name, points }) => (
          <div key={name}>
            <p>{name}: {points || 0}</p>
          </div>
        ));
      }
      return null;
    }}
  </Query>
);

export default function Home() {
  return (
    <header className="App-header">
      <h1>Hogwarts point system</h1>
      <Points />
    </header>
  );
}
