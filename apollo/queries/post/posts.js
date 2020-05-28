import gql from "graphql-tag";

const POSTS_QUERY = gql`
  query Posts {
    posts {
      id
      title
      content
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default POSTS_QUERY;