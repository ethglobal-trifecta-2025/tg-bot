/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents: Record<string, DocumentNode<any, any>> = {};

export function gql(source: string): unknown;

export function gql(source: string) {
  return documents[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
