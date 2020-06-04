const POSTS_QUERY = `query Posts {
    posts {
      id
      title
      content
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

export default POSTS_QUERY;
