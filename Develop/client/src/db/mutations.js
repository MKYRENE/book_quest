// mutations.js
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!,$email:String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($bookdata: BookInput!) {
    saveBook(bookdata:$bookdata) {
        _id
        username
        email
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removebook (bookId: $bookId) {
        _id
        username
        email
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
    }
  }
`;


// Define other mutations (ADD_USER, SAVE_BOOK, REMOVE_BOOK) similarly
