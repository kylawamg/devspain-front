import { GraphQLClient } from "graphql-request";
export function request({ query, variables }) {
  const endpoint = process.env.GRAPHQL_URL;
  const client = new GraphQLClient(endpoint, {});
  return client.request(query, variables);
  console.log("test");
}
