// @ts-check
/** @type {import("graphql-config").GraphQLProjectConfig} */
module.exports = {
  schema: "./schema.graphql",
  documents: ["./src/**/*.graphql"],
  extensions: {
    /** @type {import("@graphql-codegen/plugin-helpers").Types.Config} */
    codegen: {
      generates: {
        "src/__generated__/graphqlTypes.ts": {
          plugins: [
            {
              add: {
                content:
                  "// Code generated by graphql-codegen. DO NOTT EDIT.\n",
              },
            },
            "typescript",
          ],
          /** @type {import("@graphql-codegen/typescript").TypeScriptPluginConfig} */
          config: {},
        },
        "src/__generated__/000-basic/": {
          preset: "near-operation-file",
          /** @type {import("@graphql-codegen/near-operation-file-preset").NearOperationFileConfig} */
          presetConfig: {
            baseTypesPath: "../graphqlTypes",
            folder: "__generated__/000-basic/",
          },
          plugins: [
            {
              add: {
                content:
                  "// Code generated by graphql-codegen. DO NOTT EDIT.\n",
              },
            },
            "typescript-operations",
            "typed-document-node",
          ],
          /** @type {import("@graphql-codegen/typescript-operations").TypeScriptDocumentsPluginConfig & import("@graphql-codegen/typed-document-node").TypeScriptTypedDocumentNodesConfig} */
          config: {},
        },
      },
      hooks: {
        afterAllFileWrite: ["yarn prettier --write"],
      },
    },
  },
};
