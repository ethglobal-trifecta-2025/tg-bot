/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any; }
};

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type Bet = {
  __typename?: 'Bet';
  amount: Scalars['BigInt']['output'];
  betId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chainId: Scalars['BigInt']['output'];
  chainName: Scalars['String']['output'];
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  isWithdrawn: Scalars['Boolean']['output'];
  option: Scalars['BigInt']['output'];
  pool: Pool;
  poolId: Scalars['BigInt']['output'];
  tokenType: TokenType;
  transactionHash: Scalars['Bytes']['output'];
  updatedAt: Scalars['BigInt']['output'];
  user: Scalars['Bytes']['output'];
};

export type BetPlaced = {
  __typename?: 'BetPlaced';
  amount: Scalars['BigInt']['output'];
  betId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chainId: Scalars['BigInt']['output'];
  chainName: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  optionIndex: Scalars['BigInt']['output'];
  poolId: Scalars['BigInt']['output'];
  tokenType: Scalars['Int']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
};

export type BetPlaced_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BetPlaced_Filter>>>;
  betId?: InputMaybe<Scalars['BigInt']['input']>;
  betId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  betId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  betId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  betId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  betId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  betId_not?: InputMaybe<Scalars['BigInt']['input']>;
  betId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainName?: InputMaybe<Scalars['String']['input']>;
  chainName_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_gt?: InputMaybe<Scalars['String']['input']>;
  chainName_gte?: InputMaybe<Scalars['String']['input']>;
  chainName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_lt?: InputMaybe<Scalars['String']['input']>;
  chainName_lte?: InputMaybe<Scalars['String']['input']>;
  chainName_not?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  optionIndex?: InputMaybe<Scalars['BigInt']['input']>;
  optionIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  optionIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  optionIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  optionIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  optionIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  optionIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  optionIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BetPlaced_Filter>>>;
  poolId?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenType?: InputMaybe<Scalars['Int']['input']>;
  tokenType_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenType_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenType_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenType_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenType_not?: InputMaybe<Scalars['Int']['input']>;
  tokenType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BetPlaced_OrderBy {
  Amount = 'amount',
  BetId = 'betId',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChainId = 'chainId',
  ChainName = 'chainName',
  Id = 'id',
  OptionIndex = 'optionIndex',
  PoolId = 'poolId',
  TokenType = 'tokenType',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type BetWithdrawal = {
  __typename?: 'BetWithdrawal';
  amount: Scalars['BigInt']['output'];
  betId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chainId: Scalars['BigInt']['output'];
  chainName: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  tokenType: Scalars['Int']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
};

export type BetWithdrawal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BetWithdrawal_Filter>>>;
  betId?: InputMaybe<Scalars['BigInt']['input']>;
  betId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  betId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  betId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  betId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  betId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  betId_not?: InputMaybe<Scalars['BigInt']['input']>;
  betId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainName?: InputMaybe<Scalars['String']['input']>;
  chainName_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_gt?: InputMaybe<Scalars['String']['input']>;
  chainName_gte?: InputMaybe<Scalars['String']['input']>;
  chainName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_lt?: InputMaybe<Scalars['String']['input']>;
  chainName_lte?: InputMaybe<Scalars['String']['input']>;
  chainName_not?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BetWithdrawal_Filter>>>;
  tokenType?: InputMaybe<Scalars['Int']['input']>;
  tokenType_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenType_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenType_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenType_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenType_not?: InputMaybe<Scalars['Int']['input']>;
  tokenType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BetWithdrawal_OrderBy {
  Amount = 'amount',
  BetId = 'betId',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChainId = 'chainId',
  ChainName = 'chainName',
  Id = 'id',
  TokenType = 'tokenType',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type Bet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Bet_Filter>>>;
  betId?: InputMaybe<Scalars['BigInt']['input']>;
  betId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  betId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  betId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  betId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  betId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  betId_not?: InputMaybe<Scalars['BigInt']['input']>;
  betId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainName?: InputMaybe<Scalars['String']['input']>;
  chainName_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_gt?: InputMaybe<Scalars['String']['input']>;
  chainName_gte?: InputMaybe<Scalars['String']['input']>;
  chainName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_lt?: InputMaybe<Scalars['String']['input']>;
  chainName_lte?: InputMaybe<Scalars['String']['input']>;
  chainName_not?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  isWithdrawn?: InputMaybe<Scalars['Boolean']['input']>;
  isWithdrawn_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isWithdrawn_not?: InputMaybe<Scalars['Boolean']['input']>;
  isWithdrawn_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  option?: InputMaybe<Scalars['BigInt']['input']>;
  option_gt?: InputMaybe<Scalars['BigInt']['input']>;
  option_gte?: InputMaybe<Scalars['BigInt']['input']>;
  option_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  option_lt?: InputMaybe<Scalars['BigInt']['input']>;
  option_lte?: InputMaybe<Scalars['BigInt']['input']>;
  option_not?: InputMaybe<Scalars['BigInt']['input']>;
  option_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Bet_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenType?: InputMaybe<TokenType>;
  tokenType_in?: InputMaybe<Array<TokenType>>;
  tokenType_not?: InputMaybe<TokenType>;
  tokenType_not_in?: InputMaybe<Array<TokenType>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Bet_OrderBy {
  Amount = 'amount',
  BetId = 'betId',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChainId = 'chainId',
  ChainName = 'chainName',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsWithdrawn = 'isWithdrawn',
  Option = 'option',
  Pool = 'pool',
  PoolBetsCloseAt = 'pool__betsCloseAt',
  PoolChainId = 'pool__chainId',
  PoolChainName = 'pool__chainName',
  PoolClosureCriteria = 'pool__closureCriteria',
  PoolClosureInstructions = 'pool__closureInstructions',
  PoolCreatedAt = 'pool__createdAt',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedBlockTimestamp = 'pool__createdBlockTimestamp',
  PoolCreatedTransactionHash = 'pool__createdTransactionHash',
  PoolGradedBlockNumber = 'pool__gradedBlockNumber',
  PoolGradedBlockTimestamp = 'pool__gradedBlockTimestamp',
  PoolGradedTransactionHash = 'pool__gradedTransactionHash',
  PoolId = 'pool__id',
  PoolIsDraw = 'pool__isDraw',
  PoolLastUpdatedBlockNumber = 'pool__lastUpdatedBlockNumber',
  PoolLastUpdatedBlockTimestamp = 'pool__lastUpdatedBlockTimestamp',
  PoolLastUpdatedTransactionHash = 'pool__lastUpdatedTransactionHash',
  PoolOriginalTruthSocialPostId = 'pool__originalTruthSocialPostId',
  PoolPointsVolume = 'pool__pointsVolume',
  PoolPoolId = 'pool__poolId',
  PoolQuestion = 'pool__question',
  PoolStatus = 'pool__status',
  PoolUsdcVolume = 'pool__usdcVolume',
  PoolWinningOption = 'pool__winningOption',
  TokenType = 'tokenType',
  TransactionHash = 'transactionHash',
  UpdatedAt = 'updatedAt',
  User = 'user'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnershipTransferred = {
  __typename?: 'OwnershipTransferred';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chainId: Scalars['BigInt']['output'];
  chainName: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  previousOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainName?: InputMaybe<Scalars['String']['input']>;
  chainName_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_gt?: InputMaybe<Scalars['String']['input']>;
  chainName_gte?: InputMaybe<Scalars['String']['input']>;
  chainName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_lt?: InputMaybe<Scalars['String']['input']>;
  chainName_lte?: InputMaybe<Scalars['String']['input']>;
  chainName_not?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
  previousOwner?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OwnershipTransferred_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChainId = 'chainId',
  ChainName = 'chainName',
  Id = 'id',
  NewOwner = 'newOwner',
  PreviousOwner = 'previousOwner',
  TransactionHash = 'transactionHash'
}

export type PayoutClaimed = {
  __typename?: 'PayoutClaimed';
  amount: Scalars['BigInt']['output'];
  bet: Bet;
  betId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chainId: Scalars['BigInt']['output'];
  chainName: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  pool: Pool;
  poolId: Scalars['BigInt']['output'];
  tokenType: Scalars['Int']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
};

export type PayoutClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PayoutClaimed_Filter>>>;
  bet?: InputMaybe<Scalars['String']['input']>;
  betId?: InputMaybe<Scalars['BigInt']['input']>;
  betId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  betId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  betId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  betId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  betId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  betId_not?: InputMaybe<Scalars['BigInt']['input']>;
  betId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bet_?: InputMaybe<Bet_Filter>;
  bet_contains?: InputMaybe<Scalars['String']['input']>;
  bet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bet_ends_with?: InputMaybe<Scalars['String']['input']>;
  bet_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bet_gt?: InputMaybe<Scalars['String']['input']>;
  bet_gte?: InputMaybe<Scalars['String']['input']>;
  bet_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bet_lt?: InputMaybe<Scalars['String']['input']>;
  bet_lte?: InputMaybe<Scalars['String']['input']>;
  bet_not?: InputMaybe<Scalars['String']['input']>;
  bet_not_contains?: InputMaybe<Scalars['String']['input']>;
  bet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bet_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bet_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bet_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bet_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bet_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bet_starts_with?: InputMaybe<Scalars['String']['input']>;
  bet_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainName?: InputMaybe<Scalars['String']['input']>;
  chainName_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_gt?: InputMaybe<Scalars['String']['input']>;
  chainName_gte?: InputMaybe<Scalars['String']['input']>;
  chainName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_lt?: InputMaybe<Scalars['String']['input']>;
  chainName_lte?: InputMaybe<Scalars['String']['input']>;
  chainName_not?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PayoutClaimed_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenType?: InputMaybe<Scalars['Int']['input']>;
  tokenType_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenType_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenType_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenType_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenType_not?: InputMaybe<Scalars['Int']['input']>;
  tokenType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PayoutClaimed_OrderBy {
  Amount = 'amount',
  Bet = 'bet',
  BetAmount = 'bet__amount',
  BetBetId = 'bet__betId',
  BetBlockNumber = 'bet__blockNumber',
  BetBlockTimestamp = 'bet__blockTimestamp',
  BetChainId = 'bet__chainId',
  BetChainName = 'bet__chainName',
  BetCreatedAt = 'bet__createdAt',
  BetId = 'bet__id',
  BetIsWithdrawn = 'bet__isWithdrawn',
  BetOption = 'bet__option',
  BetPoolId = 'bet__poolId',
  BetTokenType = 'bet__tokenType',
  BetTransactionHash = 'bet__transactionHash',
  BetUpdatedAt = 'bet__updatedAt',
  BetUser = 'bet__user',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChainId = 'chainId',
  ChainName = 'chainName',
  Id = 'id',
  Pool = 'pool',
  PoolBetsCloseAt = 'pool__betsCloseAt',
  PoolChainId = 'pool__chainId',
  PoolChainName = 'pool__chainName',
  PoolClosureCriteria = 'pool__closureCriteria',
  PoolClosureInstructions = 'pool__closureInstructions',
  PoolCreatedAt = 'pool__createdAt',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedBlockTimestamp = 'pool__createdBlockTimestamp',
  PoolCreatedTransactionHash = 'pool__createdTransactionHash',
  PoolGradedBlockNumber = 'pool__gradedBlockNumber',
  PoolGradedBlockTimestamp = 'pool__gradedBlockTimestamp',
  PoolGradedTransactionHash = 'pool__gradedTransactionHash',
  PoolId = 'pool__id',
  PoolIsDraw = 'pool__isDraw',
  PoolLastUpdatedBlockNumber = 'pool__lastUpdatedBlockNumber',
  PoolLastUpdatedBlockTimestamp = 'pool__lastUpdatedBlockTimestamp',
  PoolLastUpdatedTransactionHash = 'pool__lastUpdatedTransactionHash',
  PoolOriginalTruthSocialPostId = 'pool__originalTruthSocialPostId',
  PoolPointsVolume = 'pool__pointsVolume',
  PoolPoolId = 'pool__poolId',
  PoolQuestion = 'pool__question',
  PoolStatus = 'pool__status',
  PoolUsdcVolume = 'pool__usdcVolume',
  PoolWinningOption = 'pool__winningOption',
  TokenType = 'tokenType',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type Pool = {
  __typename?: 'Pool';
  bets: Array<Bet>;
  betsCloseAt: Scalars['BigInt']['output'];
  chainId: Scalars['BigInt']['output'];
  chainName: Scalars['String']['output'];
  closureCriteria: Scalars['String']['output'];
  closureInstructions: Scalars['String']['output'];
  createdAt: Scalars['BigInt']['output'];
  createdBlockNumber: Scalars['BigInt']['output'];
  createdBlockTimestamp: Scalars['BigInt']['output'];
  createdTransactionHash: Scalars['Bytes']['output'];
  gradedBlockNumber: Scalars['BigInt']['output'];
  gradedBlockTimestamp: Scalars['BigInt']['output'];
  gradedTransactionHash: Scalars['Bytes']['output'];
  id: Scalars['String']['output'];
  isDraw: Scalars['Boolean']['output'];
  lastUpdatedBlockNumber: Scalars['BigInt']['output'];
  lastUpdatedBlockTimestamp: Scalars['BigInt']['output'];
  lastUpdatedTransactionHash: Scalars['Bytes']['output'];
  options: Array<Scalars['String']['output']>;
  originalTruthSocialPostId: Scalars['String']['output'];
  pointsBetTotals: Array<Scalars['BigInt']['output']>;
  pointsVolume: Scalars['BigInt']['output'];
  poolId: Scalars['BigInt']['output'];
  question: Scalars['String']['output'];
  status: PoolStatus;
  usdcBetTotals: Array<Scalars['BigInt']['output']>;
  usdcVolume: Scalars['BigInt']['output'];
  winningOption: Scalars['BigInt']['output'];
};


export type PoolBetsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Bet_Filter>;
};

export type PoolClosed = {
  __typename?: 'PoolClosed';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chainId: Scalars['BigInt']['output'];
  chainName: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  poolId: Scalars['BigInt']['output'];
  selectedOption: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PoolClosed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolClosed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainName?: InputMaybe<Scalars['String']['input']>;
  chainName_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_gt?: InputMaybe<Scalars['String']['input']>;
  chainName_gte?: InputMaybe<Scalars['String']['input']>;
  chainName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_lt?: InputMaybe<Scalars['String']['input']>;
  chainName_lte?: InputMaybe<Scalars['String']['input']>;
  chainName_not?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolClosed_Filter>>>;
  poolId?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  selectedOption?: InputMaybe<Scalars['BigInt']['input']>;
  selectedOption_gt?: InputMaybe<Scalars['BigInt']['input']>;
  selectedOption_gte?: InputMaybe<Scalars['BigInt']['input']>;
  selectedOption_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  selectedOption_lt?: InputMaybe<Scalars['BigInt']['input']>;
  selectedOption_lte?: InputMaybe<Scalars['BigInt']['input']>;
  selectedOption_not?: InputMaybe<Scalars['BigInt']['input']>;
  selectedOption_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PoolClosed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChainId = 'chainId',
  ChainName = 'chainName',
  Id = 'id',
  PoolId = 'poolId',
  SelectedOption = 'selectedOption',
  TransactionHash = 'transactionHash'
}

export type PoolCreated = {
  __typename?: 'PoolCreated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chainId: Scalars['BigInt']['output'];
  chainName: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  params_betsCloseAt: Scalars['BigInt']['output'];
  params_closureCriteria: Scalars['String']['output'];
  params_closureInstructions: Scalars['String']['output'];
  params_options: Array<Scalars['String']['output']>;
  params_originalTruthSocialPostId: Scalars['String']['output'];
  params_question: Scalars['String']['output'];
  poolId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PoolCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainName?: InputMaybe<Scalars['String']['input']>;
  chainName_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_gt?: InputMaybe<Scalars['String']['input']>;
  chainName_gte?: InputMaybe<Scalars['String']['input']>;
  chainName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_lt?: InputMaybe<Scalars['String']['input']>;
  chainName_lte?: InputMaybe<Scalars['String']['input']>;
  chainName_not?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolCreated_Filter>>>;
  params_betsCloseAt?: InputMaybe<Scalars['BigInt']['input']>;
  params_betsCloseAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  params_betsCloseAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  params_betsCloseAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  params_betsCloseAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  params_betsCloseAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  params_betsCloseAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  params_betsCloseAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  params_closureCriteria?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_contains?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_gt?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_gte?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_closureCriteria_lt?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_lte?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_not?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_not_contains?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_closureCriteria_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_closureCriteria_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_contains?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_gt?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_gte?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_closureInstructions_lt?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_lte?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_not?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_not_contains?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_closureInstructions_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_closureInstructions_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_options?: InputMaybe<Array<Scalars['String']['input']>>;
  params_options_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  params_options_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  params_options_not?: InputMaybe<Array<Scalars['String']['input']>>;
  params_options_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  params_options_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  params_originalTruthSocialPostId?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_contains?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_gt?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_gte?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_originalTruthSocialPostId_lt?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_lte?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_not?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_not_contains?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_originalTruthSocialPostId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_originalTruthSocialPostId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_question?: InputMaybe<Scalars['String']['input']>;
  params_question_contains?: InputMaybe<Scalars['String']['input']>;
  params_question_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_question_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_question_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_question_gt?: InputMaybe<Scalars['String']['input']>;
  params_question_gte?: InputMaybe<Scalars['String']['input']>;
  params_question_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_question_lt?: InputMaybe<Scalars['String']['input']>;
  params_question_lte?: InputMaybe<Scalars['String']['input']>;
  params_question_not?: InputMaybe<Scalars['String']['input']>;
  params_question_not_contains?: InputMaybe<Scalars['String']['input']>;
  params_question_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_question_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_question_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_question_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_question_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_question_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_question_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_question_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PoolCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChainId = 'chainId',
  ChainName = 'chainName',
  Id = 'id',
  ParamsBetsCloseAt = 'params_betsCloseAt',
  ParamsClosureCriteria = 'params_closureCriteria',
  ParamsClosureInstructions = 'params_closureInstructions',
  ParamsOptions = 'params_options',
  ParamsOriginalTruthSocialPostId = 'params_originalTruthSocialPostId',
  ParamsQuestion = 'params_question',
  PoolId = 'poolId',
  TransactionHash = 'transactionHash'
}

export enum PoolStatus {
  Graded = 'GRADED',
  None = 'NONE',
  Pending = 'PENDING',
  Regraded = 'REGRADED'
}

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  betsCloseAt?: InputMaybe<Scalars['BigInt']['input']>;
  betsCloseAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  betsCloseAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  betsCloseAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  betsCloseAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  betsCloseAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  betsCloseAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  betsCloseAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bets_?: InputMaybe<Bet_Filter>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainName?: InputMaybe<Scalars['String']['input']>;
  chainName_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_gt?: InputMaybe<Scalars['String']['input']>;
  chainName_gte?: InputMaybe<Scalars['String']['input']>;
  chainName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_lt?: InputMaybe<Scalars['String']['input']>;
  chainName_lte?: InputMaybe<Scalars['String']['input']>;
  chainName_not?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closureCriteria?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_contains?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_ends_with?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_gt?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_gte?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_in?: InputMaybe<Array<Scalars['String']['input']>>;
  closureCriteria_lt?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_lte?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_not?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_not_contains?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  closureCriteria_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_starts_with?: InputMaybe<Scalars['String']['input']>;
  closureCriteria_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closureInstructions?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_contains?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_ends_with?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_gt?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_gte?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_in?: InputMaybe<Array<Scalars['String']['input']>>;
  closureInstructions_lt?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_lte?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_not?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_not_contains?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  closureInstructions_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_starts_with?: InputMaybe<Scalars['String']['input']>;
  closureInstructions_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gradedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gradedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gradedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gradedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  gradedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gradedTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  gradedTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gradedTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  gradedTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  gradedTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gradedTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  gradedTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  gradedTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  gradedTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gradedTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  isDraw?: InputMaybe<Scalars['Boolean']['input']>;
  isDraw_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isDraw_not?: InputMaybe<Scalars['Boolean']['input']>;
  isDraw_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  lastUpdatedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  lastUpdatedTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lastUpdatedTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lastUpdatedTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lastUpdatedTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lastUpdatedTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lastUpdatedTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lastUpdatedTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  lastUpdatedTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lastUpdatedTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  options_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  options_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  options_not?: InputMaybe<Array<Scalars['String']['input']>>;
  options_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  options_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  originalTruthSocialPostId?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_contains?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_ends_with?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_gt?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_gte?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  originalTruthSocialPostId_lt?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_lte?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_not?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_not_contains?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  originalTruthSocialPostId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_starts_with?: InputMaybe<Scalars['String']['input']>;
  originalTruthSocialPostId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pointsBetTotals?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pointsBetTotals_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pointsBetTotals_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pointsBetTotals_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pointsBetTotals_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pointsBetTotals_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pointsVolume?: InputMaybe<Scalars['BigInt']['input']>;
  pointsVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pointsVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pointsVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pointsVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pointsVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pointsVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  pointsVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolId?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not?: InputMaybe<Scalars['BigInt']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  question?: InputMaybe<Scalars['String']['input']>;
  question_contains?: InputMaybe<Scalars['String']['input']>;
  question_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  question_ends_with?: InputMaybe<Scalars['String']['input']>;
  question_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_gt?: InputMaybe<Scalars['String']['input']>;
  question_gte?: InputMaybe<Scalars['String']['input']>;
  question_in?: InputMaybe<Array<Scalars['String']['input']>>;
  question_lt?: InputMaybe<Scalars['String']['input']>;
  question_lte?: InputMaybe<Scalars['String']['input']>;
  question_not?: InputMaybe<Scalars['String']['input']>;
  question_not_contains?: InputMaybe<Scalars['String']['input']>;
  question_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  question_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  question_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  question_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_starts_with?: InputMaybe<Scalars['String']['input']>;
  question_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PoolStatus>;
  status_in?: InputMaybe<Array<PoolStatus>>;
  status_not?: InputMaybe<PoolStatus>;
  status_not_in?: InputMaybe<Array<PoolStatus>>;
  usdcBetTotals?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usdcBetTotals_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usdcBetTotals_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usdcBetTotals_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usdcBetTotals_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usdcBetTotals_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usdcVolume?: InputMaybe<Scalars['BigInt']['input']>;
  usdcVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  usdcVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  usdcVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usdcVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  usdcVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  usdcVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  usdcVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  winningOption?: InputMaybe<Scalars['BigInt']['input']>;
  winningOption_gt?: InputMaybe<Scalars['BigInt']['input']>;
  winningOption_gte?: InputMaybe<Scalars['BigInt']['input']>;
  winningOption_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  winningOption_lt?: InputMaybe<Scalars['BigInt']['input']>;
  winningOption_lte?: InputMaybe<Scalars['BigInt']['input']>;
  winningOption_not?: InputMaybe<Scalars['BigInt']['input']>;
  winningOption_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Pool_OrderBy {
  Bets = 'bets',
  BetsCloseAt = 'betsCloseAt',
  ChainId = 'chainId',
  ChainName = 'chainName',
  ClosureCriteria = 'closureCriteria',
  ClosureInstructions = 'closureInstructions',
  CreatedAt = 'createdAt',
  CreatedBlockNumber = 'createdBlockNumber',
  CreatedBlockTimestamp = 'createdBlockTimestamp',
  CreatedTransactionHash = 'createdTransactionHash',
  GradedBlockNumber = 'gradedBlockNumber',
  GradedBlockTimestamp = 'gradedBlockTimestamp',
  GradedTransactionHash = 'gradedTransactionHash',
  Id = 'id',
  IsDraw = 'isDraw',
  LastUpdatedBlockNumber = 'lastUpdatedBlockNumber',
  LastUpdatedBlockTimestamp = 'lastUpdatedBlockTimestamp',
  LastUpdatedTransactionHash = 'lastUpdatedTransactionHash',
  Options = 'options',
  OriginalTruthSocialPostId = 'originalTruthSocialPostId',
  PointsBetTotals = 'pointsBetTotals',
  PointsVolume = 'pointsVolume',
  PoolId = 'poolId',
  Question = 'question',
  Status = 'status',
  UsdcBetTotals = 'usdcBetTotals',
  UsdcVolume = 'usdcVolume',
  WinningOption = 'winningOption'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bet?: Maybe<Bet>;
  betPlaced?: Maybe<BetPlaced>;
  betPlaceds: Array<BetPlaced>;
  betWithdrawal?: Maybe<BetWithdrawal>;
  betWithdrawals: Array<BetWithdrawal>;
  bets: Array<Bet>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  payoutClaimed?: Maybe<PayoutClaimed>;
  payoutClaimeds: Array<PayoutClaimed>;
  pool?: Maybe<Pool>;
  poolClosed?: Maybe<PoolClosed>;
  poolCloseds: Array<PoolClosed>;
  poolCreated?: Maybe<PoolCreated>;
  poolCreateds: Array<PoolCreated>;
  pools: Array<Pool>;
  withdrawal?: Maybe<Withdrawal>;
  withdrawals: Array<Withdrawal>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryBetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBetPlacedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBetPlacedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BetPlaced_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BetPlaced_Filter>;
};


export type QueryBetWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBetWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BetWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BetWithdrawal_Filter>;
};


export type QueryBetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bet_Filter>;
};


export type QueryOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type QueryPayoutClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPayoutClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PayoutClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PayoutClaimed_Filter>;
};


export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolClosedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolClosedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolClosed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolClosed_Filter>;
};


export type QueryPoolCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolCreated_Filter>;
};


export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type QueryWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Withdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawal_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bet?: Maybe<Bet>;
  betPlaced?: Maybe<BetPlaced>;
  betPlaceds: Array<BetPlaced>;
  betWithdrawal?: Maybe<BetWithdrawal>;
  betWithdrawals: Array<BetWithdrawal>;
  bets: Array<Bet>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  payoutClaimed?: Maybe<PayoutClaimed>;
  payoutClaimeds: Array<PayoutClaimed>;
  pool?: Maybe<Pool>;
  poolClosed?: Maybe<PoolClosed>;
  poolCloseds: Array<PoolClosed>;
  poolCreated?: Maybe<PoolCreated>;
  poolCreateds: Array<PoolCreated>;
  pools: Array<Pool>;
  withdrawal?: Maybe<Withdrawal>;
  withdrawals: Array<Withdrawal>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionBetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBetPlacedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBetPlacedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BetPlaced_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BetPlaced_Filter>;
};


export type SubscriptionBetWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBetWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BetWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BetWithdrawal_Filter>;
};


export type SubscriptionBetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bet_Filter>;
};


export type SubscriptionOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type SubscriptionPayoutClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPayoutClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PayoutClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PayoutClaimed_Filter>;
};


export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolClosedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolClosedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolClosed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolClosed_Filter>;
};


export type SubscriptionPoolCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolCreated_Filter>;
};


export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type SubscriptionWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Withdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawal_Filter>;
};

export enum TokenType {
  Points = 'POINTS',
  Usdc = 'USDC'
}

export type Withdrawal = {
  __typename?: 'Withdrawal';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chainId: Scalars['BigInt']['output'];
  chainName: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  tokenType: Scalars['Int']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
};

export type Withdrawal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Withdrawal_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainName?: InputMaybe<Scalars['String']['input']>;
  chainName_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_gt?: InputMaybe<Scalars['String']['input']>;
  chainName_gte?: InputMaybe<Scalars['String']['input']>;
  chainName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_lt?: InputMaybe<Scalars['String']['input']>;
  chainName_lte?: InputMaybe<Scalars['String']['input']>;
  chainName_not?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains?: InputMaybe<Scalars['String']['input']>;
  chainName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Withdrawal_Filter>>>;
  tokenType?: InputMaybe<Scalars['Int']['input']>;
  tokenType_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenType_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenType_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenType_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenType_not?: InputMaybe<Scalars['Int']['input']>;
  tokenType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Withdrawal_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChainId = 'chainId',
  ChainName = 'chainName',
  Id = 'id',
  TokenType = 'tokenType',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}
