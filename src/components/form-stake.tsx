
import { Button } from "./ui/button";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { useContext, useState } from "react";
import { ContractContext } from "@/contexts/ContractsProvider";
import stakeABI from "@/utils/abi/stakingContractABI.json";
import { ethers } from "ethers";

export default function FormStake({
    
}) {
    const { address, isDisconnected } = useAccount();
    const { stakingContract } = useContext(ContractContext);

    const [amount, setAmount] = useState<number>(0);

    const { config: stakeConfig, isError: stakingError } = usePrepareContractWrite({
        address: stakingContract,
        abi: stakeABI,
        functionName: 'stakeETH',
        overrides: { value: ethers.utils.parseEther(String(amount)) }
    }
    );

    const { write } = useContractWrite(stakeConfig);
    return(
        <div className="w-5/6 sm:w-96 p-3 mt-10 rounded-lg ring-1 ring-slate-300 bg-white">
        <div className="flex flex-col gap-2 w-full mt-4">
                        <div className="flex w-full h-20 rounded-lg bg-slate-100 p-4 ring-1 ring-slate-200">
                            <input
                                className="outline-none bg-inherit text-2xl align-top"
                                placeholder="0"
                                pattern="^[0-9]*[.,]?[0-9]*$"
                                onChange={(e) => { setAmount(Number(e.target.value)); }}
                            />
                            <div className="m-auto">
                                <h2 className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-900 ring-1 ring-inset ring-green-900/20">ETH</h2>
                            </div>
                        </div>
                        <div className="relative m-auto" >

                            <div className="z-30 ring-2 ring-white bg-slate-300 rounded-xl p-1 -m-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                                </svg>

                            </div>
                        </div>
                        <div className="flex w-full h-20 rounded-lg bg-slate-100 p-4 ring-1 ring-slate-200">
                            <input
                                className="outline-none bg-inherit text-2xl align-top"
                                placeholder="0"
                                value={amount}
                                pattern="^[0-9]*[.,]?[0-9]*$"
                            />
                            <div className="m-auto">
                                <h2 className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-900 ring-1 ring-inset ring-green-900/20">asETH</h2>
                            </div>
                        </div>
                        {
                            isDisconnected &&
                            <Button className="mt-4 "> Connect Fess </Button>
                        }
                        {
                            address &&
                            <Button
                                className="mt-4 "
                                onClick={(e) => {
                                    e.preventDefault();
                                    write?.();
                                }}
                                disabled={stakingError}
                                > Stake </Button>
                        }

                    </div>
                    </div>
    )
}