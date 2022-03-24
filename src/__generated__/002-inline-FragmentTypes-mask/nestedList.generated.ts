// Code generated by graphql-codegen. DO NOTT EDIT.

import * as Types from "../graphqlTypes";

export type PostWithCommentsFragment = {
  __typename?: "Post";
  title: string;
  body: string;
  comments: Array<{ __typename?: "Comment"; body: string }>;
} & { " $fragmentName": "PostWithCommentsFragment" };

export type GetPostWithCommentsQueryVariables = Types.Exact<{
  postId: Types.Scalars["String"];
}>;

export type GetPostWithCommentsQuery = {
  __typename?: "Query";
  postById: {
    __typename?: "Post";
    id: string;
    comments: Array<{ __typename?: "Comment"; id: string }>;
  } & {
    " $fragmentRefs": { PostWithCommentsFragment: PostWithCommentsFragment };
  };
};