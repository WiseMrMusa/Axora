import { createContext } from "react";
import type { Address } from "wagmi";



const contracts = {
    stakingContract: "0x426Fb60927D39E97D93D9F54fDe8dBc2623dBB01",
    masterChef: "0x58c3f2B9FfB3016ee84907CED84Cd135CFBeB762",
    farmingContract: "0x7bde2a2Fa2C77513cB97F9e10d67586250239f8E"
} as ContractsType

export const ContractContext = createContext<ContractsType>(contracts);

type ContractsType = {
    stakingContract: Address,
    masterChef: Address,
    farmingContract: Address
}

export function ContractsProvider({ children }: { children: React.ReactNode; }) {
    return (
        <ContractContext.Provider value={contracts}
        >
            {children}
        </ContractContext.Provider>
    );
}