# My Wallet App

A modern Web3 wallet application built with Next.js and TypeScript, featuring a clean UI and secure wallet integration.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (v15.1.3)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (v5)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3.4)
- **Web3 Integration:**
  - [wagmi](https://wagmi.sh/) (v2.14)
  - [@web3modal/wagmi](https://docs.walletconnect.com/web3modal/about) (v5.1)
  - [viem](https://viem.sh/) (v2.22)
- **State Management:** [@tanstack/react-query](https://tanstack.com/query/latest) (v5.62)
- **Font:** [Geist](https://vercel.com/font) (Sans & Mono)

## Development Tools

- **Package Manager:** [pnpm](https://pnpm.io/)
- **Linting:** ESLint (v9.17) with TypeScript and import rules
- **Git Hooks:** husky (v9.1) & lint-staged (v15.3) for code quality
- **Code Quality:**
  - Automatic import sorting
  - Strict TypeScript configuration
  - Pre-commit linting

## Getting Started

1. **Prerequisites:**
   - Node.js 18+
   - pnpm
   - Git

2. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-wallet-app
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
src/
├── app/                # App router pages and layouts
└── components/        # Reusable components
    └── providers/    # App providers (Web3, etc.)
```

## Features

- 🔒 Secure wallet connection with Web3Modal
- 🌙 Dark mode support
- 📱 Responsive design
- 🔄 Real-time wallet state updates
- ⚡ Optimized performance with Next.js
- 🛡️ Type-safe development with TypeScript

## Contributing

1. Create a feature branch
2. Commit changes
3. Push your branch
4. Create a pull request

Your code will be automatically linted before each commit.

## License

MIT
