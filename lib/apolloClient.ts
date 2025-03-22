import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import fetch from "cross-fetch";

if (process.env.NODE_ENV !== "production") {
  loadDevMessages();
  loadErrorMessages();
}

if (!process.env.INDEXER_URL || !process.env.INDEXER_API_KEY) {
  throw new Error(
    "Please set INDEXER_URL and INDEXER_API_KEY in your environment variables"
  );
}

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.INDEXER_URL,
    fetch,
    headers: {
      Authorization: `Bearer ${process.env.INDEXER_API_KEY}`,
    },
  }),
  cache: new InMemoryCache(),
});
