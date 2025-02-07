export interface User {
    userId: string;
    email: string;
    accessToken: string;
    account: Account[];
}

export interface Account {
    walletId: string;
    address: string;
    privateKey: string;
    addresses: UserToken[];
}

export interface UserToken {
    tokenAddress: string;
    currency: string;
    balance: number;
    chainId: string;
}

export interface NetworkContextType {
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;

    currentAccount: Account | null;
    setCurrentAccount: React.Dispatch<React.SetStateAction<Account | null>>;
}