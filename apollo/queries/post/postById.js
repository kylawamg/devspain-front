const POST_BY_ID_QUERY = `
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
  }`;

export default POST_BY_ID_QUERY;
