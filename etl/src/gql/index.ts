/**
 * @see Nice tutorial: [tutorial](https://benlimmer.com/2020/05/16/adding-typescript-types-github-graphql-api/) ([repo](https://github.com/blimmer/github-graphql-schema-types))
 */
import { githubClient } from './client';
import {
  WhoAmIQuery,
  WhoAmI,
  // AddStarMutation,
  // AddStarMutationVariables,
  // AddStar,
} from './generated/graphql';

async function whoAmI() {
  const result = await githubClient().query<WhoAmIQuery>({
    query: WhoAmI,
  });

  return result.data.viewer.login;
}

async function main() {
  const username = await whoAmI();
  console.info(`Your github username is ${username}`);
}

main();
