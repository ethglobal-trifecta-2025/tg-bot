# Trump.fun Telegram Bot

![Trump.fun Logo](https://fxewzungnacaxpsnowcu.supabase.co/storage/v1/object/public/trump-fun/logo/trump.fun.logo.jpg)

Telegram bot interface for the Trump.fun prediction market platform.

## Overview

This Telegram bot serves as an additional interface for the Trump.fun prediction market platform, allowing users to interact with the platform directly from Telegram. It provides notifications about new betting pools, market resolutions, and allows users to place bets without visiting the web interface.

Trump.fun is an AI-powered prediction market platform centered around President Trump's actions and statements. Our system automatically creates betting pools based on Trump's Truth Social posts, allowing users to place bets using either cryptocurrency (USDC) or our platform's native FREEDOM tokens.

## Features

- Receive notifications about new betting pools
- Get alerts when markets are resolved
- Place bets directly through Telegram
- Check your betting history and current positions
- Receive Trump-style responses using our AI agent
- Get real-time updates about Trump's Truth Social posts

## Tech Stack

- Bun runtime for JavaScript/TypeScript
- Node.js Telegram Bot API
- Integration with Trump.fun backend services
- Connection to blockchain for transaction processing

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.2.6 or higher
- Telegram Bot API token

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/trump-tg-bot.git
cd trump-tg-bot
```

2. Install dependencies:

```bash
bun install
```

3. Create a `.env` file with the following variables:

```
# Authentication & Wallet Integration
PRIVY_APP_ID=             # Your Privy App ID for wallet integration
PRIVY_APP_SECRET=         # Your Privy App Secret (keep this secure)

# Database
SUPABASE_URL=             # URL for your Supabase instance
SUPABASE_ANON_KEY=        # Anon/Public key for Supabase access

# Telegram Bot Integration
BOT_ID=                   # Your Telegram bot ID for notifications

# Blockchain Indexer
INDEXER_URL=              # URL for the blockchain indexer service
INDEXER_API_KEY=          # API key for accessing the indexer
```

4. Run the bot:

```bash
bun run index.ts
```

## Bot Commands

- `/start` - Initialize the bot and get welcome message
- `/help` - Display available commands
- `/markets` - List current open betting markets
- `/bet [market_id] [option] [amount]` - Place a bet
- `/balance` - Check your current balance
- `/history` - View your betting history

## Deployment

The bot can be deployed to any server running Bun:

```bash
# On your server
git clone https://github.com/yourusername/trump-tg-bot.git
cd trump-tg-bot
bun install
# Use PM2 or similar to keep the bot running
pm2 start --interpreter ~/.bun/bin/bun index.ts
```

## Integration with Trump.fun Platform

The Telegram bot integrates with other Trump.fun components:
- Connects to the same blockchain contracts as the frontend
- Uses the AI agent for generating Trump-style responses
- Synchronizes user accounts across platforms

## Try the Bot

You can try our bot at: [https://t.me/trump_fun_bot](https://t.me/trump_fun_bot)

## Social Media

- Twitter: [@realTrumpFun](https://x.com/realTrumpFun)
- Truth Social: [@realDonaldTrump](https://truthsocial.com/@realDonaldTrump)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
