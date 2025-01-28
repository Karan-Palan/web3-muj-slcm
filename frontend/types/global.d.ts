interface Window {
  ethereum?: {
    request: (params: { method: string; params?: unknown[] }) => Promise<any>;
  };
  solana?: {
    isPhantom?: boolean;
    isBackpack?: boolean;
    connect: () => Promise<{ publicKey: { toString(): string } }>;
  };
  aptos?: {
    connect: () => Promise<{ address: string }>;
    account: () => Promise<{ address: string }>;
  };
}