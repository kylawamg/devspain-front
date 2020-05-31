import gql from "graphql-tag";

const POST_BY_ID_QUERY = gql`
  query Posts($id: ID!) {
    post(id: $id) {
      id
      title
      content
      published_at
      user {
        username
      }
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

export default POST_BY_ID_QUERY;
