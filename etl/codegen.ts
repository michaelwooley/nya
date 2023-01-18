
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/gql/generated/github-schema-loader.ts",
  generates: {
    "src/gql/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers", "typescript-document-nodes","typescript-operations"]
    }
  },
  documents:["src/gql/queries/*.graphql","src/gql/mutations/*.graphql"],
  verbose:true,
};

export default config;
