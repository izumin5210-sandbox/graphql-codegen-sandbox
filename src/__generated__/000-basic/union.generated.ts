// Code generated by graphql-codegen. DO NOTT EDIT.

import * as Types from "../graphqlTypes";

export type PostImageFragment = { __typename?: "Image"; imageUrl: string };

export type PostVideoFragment = { __typename?: "Video"; videoUrl: string };

export type PostWithAttachmentsFragment = {
  __typename?: "Post";
  title: string;
  attachmentFiles: Array<
    | { __typename?: "Image"; imageUrl: string }
    | { __typename?: "Video"; videoUrl: string }
  >;
};

export type GetPostWithAttachmentsQueryVariables = Types.Exact<{
  postId: Types.Scalars["String"];
}>;

export type GetPostWithAttachmentsQuery = {
  __typename?: "Query";
  postById: {
    __typename?: "Post";
    title: string;
    attachmentFiles: Array<
      | { __typename?: "Image"; imageUrl: string }
      | { __typename?: "Video"; videoUrl: string }
    >;
  };
};
