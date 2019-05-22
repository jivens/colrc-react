import { gql } from 'apollo-boost';

const getUsersQuery = gql`
  {
    users {
      id
      first
      last
      username
<<<<<<< HEAD
      password
=======
>>>>>>> 950e4ac66c665da2d17dd5cd94a258dd09b42ae4
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
<<<<<<< HEAD
      nicodemus
      salish
=======
      salish
      nicodemus
>>>>>>> 950e4ac66c665da2d17dd5cd94a258dd09b42ae4
      english
    }
  }
`;

const addUserMutation = gql`
<<<<<<< HEAD
  mutation($first: String!, $last: String!, $username: String! $email: String!, $password: String!, $roles: String!,) {
    addUser(first: $first, last: $last, username: $username, email: $email, password: $password, roles: $roles) {
=======
  mutation($first: String!, $last: String!, $username: String!, $email: String!, $password: String!, $roles: String!) {
    addUser(first: $first, last: $last, username: $username, email: $email, password: $password, roles: $roles) {
      id
>>>>>>> 950e4ac66c665da2d17dd5cd94a258dd09b42ae4
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
<<<<<<< HEAD
  mutation($root: String!, $number: Integer!, $salish: String! $nicodemus: String!, $english: String!) {
    addRoot (root: $root, number: $number, salish: $salish, nicodemus: $nicodemus, english: $english) {
=======
  mutation($root: String!, $number: Integer!, $salish: String!, $nicodemus: String!, $english: String!) {
    addUser(root: $root, number: $number, salish: $salish, nicodemus: $nicodemus, english: $english) {
      id
>>>>>>> 950e4ac66c665da2d17dd5cd94a258dd09b42ae4
      root
      number
      salish
      nicodemus
      english
    }
  }
`;
<<<<<<< HEAD
=======

>>>>>>> 950e4ac66c665da2d17dd5cd94a258dd09b42ae4
const getUserQuery = gql`
  query($id: ID) {
    user(id: $id) {
      id
      first
      last
      username
<<<<<<< HEAD
      password
      email
=======
      email
      password
>>>>>>> 950e4ac66c665da2d17dd5cd94a258dd09b42ae4
      roles
    }
  }
`;
<<<<<<< HEAD
=======

>>>>>>> 950e4ac66c665da2d17dd5cd94a258dd09b42ae4
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
<<<<<<< HEAD
export { getUsersQuery, getRootsQuery, getUserQuery, getRootQuery, addUserMutation, addRootMutation };

=======

export { getUsersQuery, getRootsQuery, addUserMutation, addRootMutation, getUserQuery, getRootQuery };
>>>>>>> 950e4ac66c665da2d17dd5cd94a258dd09b42ae4
