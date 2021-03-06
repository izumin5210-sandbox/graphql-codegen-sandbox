// Code generated by graphql-codegen. DO NOTT EDIT.

import * as Types from "../graphqlTypes";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type PostHeaderUserFragment = {
  __typename?: "User";
  username: string;
  avatarUrl?: string | null;
};

export type PostHeaderFragment = {
  __typename?: "Post";
  title: string;
  author: { __typename?: "User"; username: string; avatarUrl?: string | null };
};

export type GetPostHeaderQueryVariables = Types.Exact<{
  postId: Types.Scalars["String"];
}>;

export type GetPostHeaderQuery = {
  __typename?: "Query";
  postById: {
    __typename?: "Post";
    id: string;
    title: string;
    author: {
      __typename?: "User";
      id: string;
      username: string;
      avatarUrl?: string | null;
    };
  };
};

export const PostHeaderUserFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostHeaderUser" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "username" } },
          { kind: "Field", name: { kind: "Name", value: "avatarUrl" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostHeaderUserFragment, unknown>;
export const PostHeaderFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Post" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PostHeaderUser" },
                },
              ],
            },
          },
        ],
      },
    },
    ...PostHeaderUserFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PostHeaderFragment, unknown>;
export const GetPostHeaderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPostHeader" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "postId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "postId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "postId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "author" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PostHeader" },
                },
              ],
            },
          },
        ],
      },
    },
    ...PostHeaderFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<GetPostHeaderQuery, GetPostHeaderQueryVariables>;
