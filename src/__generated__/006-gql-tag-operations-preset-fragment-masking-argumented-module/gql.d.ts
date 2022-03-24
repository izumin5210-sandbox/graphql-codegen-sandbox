/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

declare module "@urql/core" {
  export function gql(
    source: "fragment PostSummary on Post {\n  title\n  body\n  user: author {\n    username\n    thumbnailUrl: avatarUrl\n  }\n}\n\nquery GetPostSummary($postId: String!) {\n  postById(postId: $postId) {\n    id\n    ...PostSummary\n  }\n}"
  ): typeof import("./graphql").PostSummaryFragmentDoc;
  export function gql(
    source: "fragment PostWithAuthor on Post {\n  title\n  author {\n    ... on User {\n      username\n    }\n  }\n}\n\nquery GetPostWithAuthor($postId: String!) {\n  postById(postId: $postId) {\n    id\n    ...PostWithAuthor\n  }\n}"
  ): typeof import("./graphql").PostWithAuthorFragmentDoc;
  export function gql(
    source: "fragment PostUserAvatar on Post {\n  author {\n    avatarUrl\n  }\n}\n\nfragment PostDetailHeader on Post {\n  title\n  ...PostUserAvatar\n}\n\nfragment PostDetail on Post {\n  title\n  body\n  author {\n    username\n  }\n  ...PostUserAvatar\n}\n\nquery GetPostDetail($postId: String!) {\n  postById(postId: $postId) {\n    id\n    ...PostDetail\n    ...PostDetailHeader\n  }\n}"
  ): typeof import("./graphql").PostUserAvatarFragmentDoc;
  export function gql(
    source: "fragment PostHeaderUser on User {\n  username\n  avatarUrl\n}\n\nfragment PostHeader on Post {\n  title\n  author {\n    ...PostHeaderUser\n  }\n}\n\nquery GetPostHeader($postId: String!) {\n  postById(postId: $postId) {\n    id\n    author {\n      id\n    }\n    ...PostHeader\n  }\n}"
  ): typeof import("./graphql").PostHeaderUserFragmentDoc;
  export function gql(
    source: "fragment PostWithComments on Post {\n  title\n  body\n  comments {\n    body\n  }\n}\n\nquery GetPostWithComments($postId: String!) {\n  postById(postId: $postId) {\n    id\n    comments {\n      id\n    }\n    ...PostWithComments\n  }\n}"
  ): typeof import("./graphql").PostWithCommentsFragmentDoc;
  export function gql(
    source: "fragment PostListItem on Post {\n  title\n  author {\n    id\n    avatarUrl\n    username\n  }\n}\n\nquery ListPosts($userId: String!) {\n  postsByUserId(userId: $userId) {\n    id\n    ...PostListItem\n  }\n}"
  ): typeof import("./graphql").PostListItemFragmentDoc;
  export function gql(
    source: "fragment UserHeader on User {\n  username\n  avatarUrl\n}\n\nquery GetUserHeader($userId: String!) {\n  userById(userId: $userId) {\n    id\n    ...UserHeader\n  }\n}"
  ): typeof import("./graphql").UserHeaderFragmentDoc;
  export function gql(
    source: "fragment PostImage on Image {\n  imageUrl\n}\n\nfragment PostVideo on Video {\n  videoUrl\n}\n\nfragment PostWithAttachments on Post {\n  title\n  attachmentFiles {\n    ...PostImage\n    ...PostVideo\n  }\n}\n\nquery GetPostWithAttachments($postId: String!) {\n  postById(postId: $postId) {\n    ...PostWithAttachments\n  }\n}"
  ): typeof import("./graphql").PostImageFragmentDoc;
  export function gql(source: string): unknown;

  export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
}
