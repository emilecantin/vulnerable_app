const {gql} = require('apollo-server');

const typeDefs = gql`
#--------------------
# Main Query type
#--------------------
type Query {
  me: User
  houses: [House]
  house(id: String!): House
}

#--------------------
# Main Mutation type
#--------------------
type Mutation {
  signup(firstName: String!, lastName: String!, email: String!, password: String): User
}

"The user model"
type User {
  firstName: String
  lastName: String
  email: String
  is_teacher: Boolean # If false, it's a student
}

type House {
  id: ID
  name: String
  points: Int
  assignations: [PointAssignation]
}

type PointAssignation {
  house: Int
  quantity: Int
  author: User
}


`;

module.exports = typeDefs;

