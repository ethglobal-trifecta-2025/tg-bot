import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api.studio.thegraph.com/query/105510/trump-fun/version/latest",
  documents: ["src/**/*.ts(x)"],
  generates: {
    "lib/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
