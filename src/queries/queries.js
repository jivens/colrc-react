import { gql } from 'apollo-boost';


const getStemsQuery = gql`
  {
    stems {
      id
      category
      reichard
      doak
      salish
      nicodemus
      english
      note
    }
  }
`;

const getAffixesQuery = gql`
  {
    affixes {
      id
      type
      salish
      nicodemus
      english
      link
      page
    }
  }
`;

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

const addStemMutation = gql`
  mutation($category: String!, $reichard: String!, $doak: String!, $salish: String!, $nicodemus: String!, $english: String!, $note: String!) {
    addStem(category: $category, reichard: $reichard, doak: $doak, salish: $salish, nicodemus: $nicodemus, english: $english, note: $note) {
      id
      category
      reichard
      doak
      salish
      nicodemus
      english
      note
    }
  }
`;

const updateStemMutation = gql`
  mutation($id: ID!, $category: String!, $reichard: String!, $doak: String!, $salish: String!, $nicodemus: String!, $english: String!, $note: String!) {
    updateStem(id: $id, category: $category, reichard: $reichard, doak: $doak, salish: $salish, nicodemus: $nicodemus, english: $english, note: $note) {
      id
      category
      reichard
      doak
      salish
      nicodemus
      english
	  note
    }
  }
  `;

const deleteStemMutation = gql`
  mutation($id: ID!) {
    deleteStem(id: $id) {
      id
      category
      reichard
      doak
      salish
      nicodemus
      english
      note
    }
  }
`;
const addAffixMutation = gql`
  mutation($type: String!, $salish: String!, $nicodemus: String!, $english: String!, $link: String!, $page: String!) {
    addAffix(type: $type, salish: $salish, nicodemus: $nicodemus, english: $english, link: $link, page: $page) {
      id
      type
      salish
      nicodemus
      english
      link
      page
    }
  }
`;

const updateAffixMutation = gql`
  mutation($id: ID!, $type: String!, $salish: String!, $nicodemus: String!, $english: String!, $link: String!, $page: String!) {
    updateAffix(id: $id, type: $type, salish: $salish, nicodemus: $nicodemus, english: $english, link: $link, page: $page) {
      id
      type
      salish
      nicodemus
      english
	  link
	  page
    }
  }
  `;

const deleteAffixMutation = gql`
  mutation($id: ID!) {
    deleteAffix(id: $id) {
      id
      type
      salish
      nicodemus
      english
      link
      page
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
  mutation($root: String!, $number: Int!, $salish: String!, $nicodemus: String!, $english: String!) {
    addRoot(root: $root, number: $number, salish: $salish, nicodemus: $nicodemus, english: $english) {
      id
      root
      number
      salish
      nicodemus
      english
    }
  }
`;

const updateRootMutation = gql`
  mutation($id: ID!, $root: String!, $number: Int!, $salish: String!, $nicodemus: String!, $english: String!) {
    updateRoot(id: $id, root: $root, number: $number, salish: $salish, nicodemus: $nicodemus, english: $english) {
      id
      root
      number
      salish
      nicodemus
      english
    }
  }
`;

const deleteRootMutation = gql`
  mutation($id: ID!) {
    deleteRoot(id: $id) {
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

export { getStemsQuery, addStemMutation, deleteStemMutation, updateStemMutation, getAffixesQuery, addAffixMutation, deleteAffixMutation, updateAffixMutation, getUsersQuery, getRootsQuery, getUserQuery, getRootQuery, addUserMutation, addRootMutation, updateRootMutation, deleteRootMutation };
