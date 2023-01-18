/**
 * @see Nice tutorial: [tutorial](https://benlimmer.com/2020/05/16/adding-typescript-types-github-graphql-api/) ([repo](https://github.com/blimmer/github-graphql-schema-types))
 */
import { ApolloError } from '@apollo/client';
import { githubClient } from './client';
import {
  WhoAmIQuery,
  WhoAmI,
  // AddStarMutation,
  // AddStarMutationVariables,
  // AddStar,
} from './generated/graphql';

export async function whoAmI(token: string) {
  let result: WhoAmIQuery | undefined;
  try {
    result = await githubClient(token).query<WhoAmIQuery>({
      query: WhoAmI,
      // errorPolicy: 'all',
    });
  } catch (error) {
    // TODO Add error hooks ...somewhere
    if (error instanceof ApolloError) {
      //
      console.error('Known apollo error', error);
    } else if (error instanceof Error) {
      //
      console.error('Generic error handler', error);
    } else {
      console.error('Generic non-error handler', error);
    }
  }

  return result;
}

export async function main() {
  const username = await whoAmI(process.env.GITHUB_TOKEN!);
  console.info(`Your github username is ${username}`);
}

// main();
// https://www.apollographql.com/docs/react/data/error-handling#graphql-error-policies
