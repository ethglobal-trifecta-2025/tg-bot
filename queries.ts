import { gql } from "@apollo/client";

export const GET_POOLS = gql(`
  query GetPools(
    $filter: Pool_filter!
    $orderBy: Pool_orderBy!
    $orderDirection: OrderDirection!
    $first: Int
  ) {
    pools(
      where: $filter
      orderBy: $orderBy
      orderDirection: $orderDirection
      first: $first
    ) {
        id
        poolId
        question
        options
        status
        chainId
        chainName
        createdAt
        createdBlockNumber
        createdBlockTimestamp
        createdTransactionHash
        lastUpdatedBlockNumber
        lastUpdatedBlockTimestamp
        lastUpdatedTransactionHash
        gradedBlockNumber
        gradedBlockTimestamp
        gradedTransactionHash
        betsCloseAt
        usdcBetTotals
        pointsBetTotals
        usdcVolume
        pointsVolume
        originalTruthSocialPostId
    }
  }
`);

export const GET_POOLS_SUBSCRIPTION = gql(`
  subscription GetPoolsSubscription(
    $filter: Pool_filter!
  ) {
    pools(
      where: $filter
    ) {
        id
        poolId
        question
        options
        status
        chainId
        chainName
        createdAt
        createdBlockNumber
        createdBlockTimestamp
        createdTransactionHash
        lastUpdatedBlockNumber
        lastUpdatedBlockTimestamp
        lastUpdatedTransactionHash
        gradedBlockNumber
        gradedBlockTimestamp
        gradedTransactionHash
    }
  }
`);

export const GET_BET_PLACED = gql(`
  query GetBetPlaced(
    $first: Int = 10
    $filter: BetPlaced_filter!
    $orderBy: BetPlaced_orderBy!
    $orderDirection: OrderDirection!
  ) {
    betPlaceds(
      first: $first
      where: $filter
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      betId
      optionIndex
      amount
      poolId
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`);

export const GET_BETS = gql(`
  query GetBets(
    $first: Int = 10
    $filter: Bet_filter!
    $orderBy: Bet_orderBy!
    $orderDirection: OrderDirection!
  ) {
    bets(
      first: $first
      where: $filter
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      betId
      option
      amount
      poolId
      blockNumber
      blockTimestamp
      transactionHash
      pool {
        id
        poolId
        question
        options
        status
        chainId
        chainName
        createdAt
      }
    }
  }
`);

export const GET_BETS_SUBSCRIPTION = gql(`
  subscription GetBetsSubscription(
    $filter: Bet_filter!
  ) {
    bets(
      where: $filter
    ) {
      id
      betId
      option
      amount
      poolId
      blockNumber
      blockTimestamp
      transactionHash
      pool {
        id
        poolId
        question
        options
        status
        chainId
        chainName
        createdAt
      }
    }
  }
`);

export const GET_POOL = gql(`
  query GetPool($poolId: ID!) {
    pool(id: $poolId) {
      id
      poolId
      question
      options
      status
      chainId
      chainName
      createdAt
      createdBlockNumber
      createdBlockTimestamp
      createdTransactionHash
      gradedBlockNumber
      gradedBlockTimestamp
      gradedTransactionHash
      betsCloseAt
      usdcBetTotals
      pointsBetTotals
      usdcVolume
      pointsVolume
      winningOption
    }
  }
`);

export const GET_POOL_SUBSCRIPTION = gql(`
  subscription GetPoolSubscription($poolId: ID!) {
    pool(id: $poolId) {
      id
      poolId
      question
      options
      status
      chainId
      chainName
      createdAt
      createdBlockNumber
      createdBlockTimestamp
      createdTransactionHash
      gradedBlockNumber
      gradedBlockTimestamp
      gradedTransactionHash
    }
  }
`);
