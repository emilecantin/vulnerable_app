import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const query = gql`
query getHouse($id: String!){
  house(id: $id) {
    id
    name
    points
    assignations {
      house
      quantity
    }
  }
}
`

const Points = ({id}) => (
  <Query
    query={query}
    variables={{id}}
  >
    {({ loading, error, data }) => {
      console.log(error);
      if (loading) return <p>Loading...</p>;
      if (error) {
        return (
          <>
              <p>Error :(</p>
              <p>
                  Could not get house ID:{id}
              </p>
          </>
        );
      }

      if(data && data.house) {
        return (
          <div>
            <p>{data.house.name}: {data.house.points || 0}</p>
            <ul>
              {data.house.assignations.map((a, i) => (
                <li key={i}>{a.house} - {a.quantity}</li>
              ))}
            </ul>
          </div>
        );
      }
      return "No data";
    }}
  </Query>
);

export default function House(props) {
  console.log(props);
  const {match} = props;
  return (
    <header className="App-header">
      <h1>Hogwarts point system</h1>
      <Points id={match.params.id}/>
    </header>
  );
}
