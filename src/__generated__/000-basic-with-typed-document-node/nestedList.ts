// Code generated by graphql-codegen. DO NOTT EDIT.

import * as Types from "../graphqlTypes";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type PostWithCommentsFragment = {
  __typename?: "Post";
  title: string;
  body: string;
  comments: Array<{ __typename?: "Comment"; body: string }>;
};

export type GetPostWithCommentsQueryVariables = Types.Exact<{
  postId: Types.Scalars["String"];
}>;

export type GetPostWithCommentsQuery = {
  __typename?: "Query";
  postById: {
    __typename?: "Post";
    id: string;
    title: string;
    body: string;
    comments: Array<{ __typename?: "Comment"; id: string; body: string }>;
  };
};

export const PostWithCommentsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostWithComments" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Post" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "comments" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "body" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostWithCommentsFragment, unknown>;
export const GetPostWithCommentsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPostWithComments" },
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
                  name: { kind: "Name", value: "comments" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PostWithComments" },
                },
              ],
            },
          },
        ],
      },
    },
    ...PostWithCommentsFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  GetPostWithCommentsQuery,
  GetPostWithCommentsQueryVariables
>;
