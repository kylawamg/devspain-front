import { GraphQLClient } from "graphql-request";
export function request({ query, variables }) {
  const endpoint = "http://localhost:1337/graphql";
  const client = new GraphQLClient(endpoint, {});
  return client.request(query, variables);
}
