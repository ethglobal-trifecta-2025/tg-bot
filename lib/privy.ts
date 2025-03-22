import { PrivyClient } from "@privy-io/server-auth";

if (!process.env.PRIVY_APP_ID || !process.env.PRIVY_APP_SECRET) {
  throw new Error(
    "Please set PRIVY_APP_ID and PRIVY_APP_SECRET in your environment variables."
  );
}

export const privy = new PrivyClient(
  process.env.PRIVY_APP_ID,
  process.env.PRIVY_APP_SECRET
  //   {
  //     walletApi: {
  //       authorizationPrivateKey:
  //         "insert-your-authorization-private-key-from-the-dashboard",
  //     },
  //   }
);
