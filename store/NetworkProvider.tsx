'use client'
import { Account, NetworkContextType, User } from "@/types/types"
import { useState, createContext, useContext, useEffect } from "react"

export const NetworkContext = createContext<NetworkContextType | null>(null);

export const NetworkProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [currentAccount,setCurrentAccount] = useState<Account | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("userAccounts");
        if (savedUser && savedUser !== "null" && savedUser !== "{}") {
            try {
                const parsedUser: User = JSON.parse(savedUser);

                if (parsedUser && parsedUser.userId && parsedUser.email && parsedUser.accessToken) {
                    setCurrentUser(parsedUser);
                }
            } catch (error) {
                console.error("Error parsing user data from localStorage:", error);
            }
        }
    }, [])

    useEffect(()=>{
        const savedAccount = localStorage.getItem("currentAccount");
        if(savedAccount && savedAccount !== "null" && savedAccount !== "{}"){
            try{
                const parsedUser: Account = JSON.parse(savedAccount);
                if (parsedUser && parsedUser.address && parsedUser.privateKey && parsedUser.walletId && parsedUser.addresses) {
                    setCurrentAccount(parsedUser);
                }
            }catch(error){
                console.error("Error parsing user data from localStorage:", error);
            }
        }
    },[])

    useEffect(()=>{
        if (currentUser) {
            localStorage.setItem("userAccounts", JSON.stringify(currentUser));
          }
    },[currentUser]);

    useEffect(()=>{
        if (currentAccount) {
            localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
          }
    },[currentAccount]);

    return (
        <NetworkContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                currentAccount,
                setCurrentAccount
            }}
        >
            {children}
        </NetworkContext.Provider>
    )
};

export const useNetwork = () => {
    const context = useContext(NetworkContext);
    if(context == undefined){
        throw new Error("useNetwork must be used within a NetworkProvider");
    }
    return context;
};


