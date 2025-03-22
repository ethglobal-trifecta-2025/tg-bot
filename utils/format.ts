import { PoolStatus } from "../lib/__generated__/graphql";

// Format numbers with commas and limit decimal places
export const formatUSD = (value: string) => {
  // Convert from wei (assuming 6 decimals for USDC)
  const dollars = parseInt(value) / 1_000_000;
  return `$${dollars.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
};

export const formatPoints = (value: string) => {
  // Convert from wei (assuming 18 decimals for points)
  const points = parseInt(value) / 1_000_000_000_000_000_000;
  return points.toLocaleString("en-US", { maximumFractionDigits: 2 });
};

// Format timestamp to readable date
export const formatDate = (timestamp: string) => {
  return new Date(parseInt(timestamp) * 1000).toLocaleString();
};

// Format status with emoji
export const formatStatus = (status: PoolStatus) => {
  switch (status) {
    case PoolStatus.Pending:
      return "🟢 Active";
    case PoolStatus.Graded:
      return "✅ Graded";
    default:
      return status;
  }
};
