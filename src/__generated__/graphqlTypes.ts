// Code generated by graphql-codegen. DO NOTT EDIT.

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AttachmentFile = Image | Video;

export type Comment = {
  __typename?: "Comment";
  author: User;
  body: Scalars["String"];
  id: Scalars["String"];
};

export type Image = {
  __typename?: "Image";
  id: Scalars["String"];
  imageUrl: Scalars["String"];
};

export type Post = {
  __typename?: "Post";
  attachmentFiles: Array<AttachmentFile>;
  author: User;
  body: Scalars["String"];
  comments: Array<Comment>;
  id: Scalars["String"];
  title: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  postById: Post;
  postsByUserId: Array<Post>;
  userById: User;
};

export type QueryPostByIdArgs = {
  postId: Scalars["String"];
};

export type QueryPostsByUserIdArgs = {
  userId: Scalars["String"];
};

export type QueryUserByIdArgs = {
  userId: Scalars["String"];
};

export type User = {
  __typename?: "User";
  avatarUrl?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  id: Scalars["String"];
  username: Scalars["String"];
};

export type Video = {
  __typename?: "Video";
  id: Scalars["String"];
  videoUrl: Scalars["String"];
};
