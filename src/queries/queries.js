import { gql } from 'apollo-boost';

const getUsersQuery = gql`
  {
    users {
      id
      first
      last
      username
      password
      email
      roles
    }
  }
`;

const getRootsQuery = gql`
  {
    roots {
      id
      root
      number
      salish
      nicodemus
      english
    }
  }
`;

const addUserMutation = gql`
  mutation($first: String!, $last: String!, $username: String!, $email: String!, $password: String!, $roles: String!) {
    addUser(first: $first, last: $last, username: $username, email: $email, password: $password, roles: $roles) {
      id
      first
      last
      username
      email
      password
      roles
    }
  }
`;

const addRootMutation = gql`
  mutation($root: String!, $number: Integer!, $salish: String!, $nicodemus: String!, $english: String!) {
    addUser(root: $root, number: $number, salish: $salish, nicodemus: $nicodemus, english: $english) {
      id
      root
      number
      salish
      nicodemus
      english
    }
  }
`;

const getUserQuery = gql`
  query($id: ID) {
    user(id: $id) {
      id
      first
      last
      username
      email
      password
      roles
    }
  }
`;

const getRootQuery = gql`
  query($id: ID) {
    root(id: $id) {
      id
      root
      number
      salish
      nicodemus
      english
    }
  }
`;

export { getUsersQuery, getRootsQuery, getUserQuery, getRootQuery, addUserMutation, addRootMutation };

