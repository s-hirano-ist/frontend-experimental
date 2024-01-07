import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  // watch: true,
  documents: "src/**/*.gql",
  generates: {
    "src/graphqlTypes.ts": {
      plugins: ["typescript"],
      config: {
        enumTypes: true,
        namingConvention: {
          typeNames: "change-case#pascalCase",
          enumValues: "change-case-all#pascalCase",
          transformUnderscore: true,
        },
      },
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".gen.ts",
        baseTypesPath: "graphqlTypes.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
        enumAsTypes: true,
        namingConvention: {
          typeNames: "change-case-all#pascalCase",
          enumValues: "change-case-all#pascalCase",
          transformUnderscore: true,
        },
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  hooks: {
    afterAllFileWrite: "pnpm fmt:fix",
  },
};

export default config;
