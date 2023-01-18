import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core';
import fetch from 'cross-fetch';

/**
 * Creates a new Apollo client for GraphQL requests to the GitHub API.
 *
 * @returns A new Apollo client for GitHub API requests.
 *
 * @throws An error if the `GITHUB_TOKEN` environment variable is not set.
 *
 * @see https://www.apollographql.com/docs/react/api/core/ApolloClient/
 * @see https://www.apollographql.com/docs/react/api/link/apollo-link-http/
 * @see https://www.apollographql.com/docs/react/data/cache/
 */
export function githubClient(
  token: string,
  fetcher?: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) => Promise<Response>
): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    // TODO Extract headers w/ rate limit info either from got hook or via link (https://stackoverflow.com/a/58986484/3422060)
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        authorization: `Bearer ${token}`,
      },
      // TODO Swap out for got: https://github.com/alexghr/got-fetch w/ https://github.com/sindresorhus/got/blob/main/documentation/cache.md
      fetch: fetcher || fetch,
    }),
    cache: new InMemoryCache(),
  });
}
