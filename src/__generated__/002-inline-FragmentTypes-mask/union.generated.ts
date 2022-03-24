// Code generated by graphql-codegen. DO NOTT EDIT.

import * as Types from "../graphqlTypes";

export type PostImageFragment = { __typename?: "Image"; imageUrl: string } & {
  " $fragmentName": "PostImageFragment";
};

export type PostVideoFragment = { __typename?: "Video"; videoUrl: string } & {
  " $fragmentName": "PostVideoFragment";
};

export type PostWithAttachmentsFragment = {
  __typename?: "Post";
  title: string;
  attachmentFiles: Array<
    | ({ __typename?: "Image" } & {
        " $fragmentRefs": { PostImageFragment: PostImageFragment };
      })
    | ({ __typename?: "Video" } & {
        " $fragmentRefs": { PostVideoFragment: PostVideoFragment };
      })
  >;
} & { " $fragmentName": "PostWithAttachmentsFragment" };

export type GetPostWithAttachmentsQueryVariables = Types.Exact<{
  postId: Types.Scalars["String"];
}>;

export type GetPostWithAttachmentsQuery = {
  __typename?: "Query";
  postById: { __typename?: "Post" } & {
    " $fragmentRefs": {
      PostWithAttachmentsFragment: PostWithAttachmentsFragment;
    };
  };
};
