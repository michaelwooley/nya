// import { graphql, GraphqlResponseError } from '@octokit/graphql';
// import { GetAwesomeRepos } from './queries';
// import { GetAwesomeReposQuery } from './types';

// /**
//  * @see https://the-guild.dev/graphql/codegen
//  * @see https://benlimmer.com/2020/05/16/adding-typescript-types-github-graphql-api/
//  */
// const a = async () => {
//   const graphqlWithAuth = graphql.defaults({
//     headers: {
//       authorization: `token secret123`,
//     },
//   });

//   try {
//   const { search, rateLimit } = await graphqlWithAuth<GetAwesomeReposQuery>(
//       GetAwesomeRepos
//     );
//   } catch (error) {
//     if (error instanceof GraphqlResponseError) {
//       // do something with the error, allowing you to detect a graphql response error,
//       // compared to accidentally catching unrelated errors.

//       // server responds with an object like the following (as an example)
//       // class GraphqlResponseError {
//       //  "headers": {
//       //    "status": "403",
//       //  },
//       //  "data": null,
//       //  "errors": [{
//       //   "message": "Field 'bioHtml' doesn't exist on type 'User'",
//       //   "locations": [{
//       //    "line": 3,
//       //    "column": 5
//       //   }]
//       //  }]
//       // }

//       console.log("Request failed:", error.request); // { query, variables: {}, headers: { authorization: 'token secret123' } }
//       console.log(error.message); // Field 'bioHtml' doesn't exist on type 'User'
//     } else {
//       // handle non-GraphQL error
//     }

//   // search;
// };

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
// import { main } from './gql/index';
// main();
https://www.apollographql.com/docs/react/data/error-handling#graphql-error-policies
