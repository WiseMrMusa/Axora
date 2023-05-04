import { useContext, useState } from "react";
import { type Address, useContractRead } from "wagmi";
import Link from "next/link";
import { ContractContext } from "@/contexts/ContractsProvider";
import masterChefABI from '@/utils/abi/masterChefABI.json';

export type PoolInfoType = {
    lpToken : Address,
    allocPoint   : number ,
    lastRewardBlock : number,
    accAxoraReward :number,
    totalDepositors   : number;
}

export default function FarmPool({id}: {id: number}){
    const [poolInfo, setPoolInfo] = useState<PoolInfoType>();

    const { masterChef } = useContext(ContractContext);

    useContractRead({
        address: masterChef,
        abi: masterChefABI,
        functionName: "poolInfo",
        args: [id],
        onSuccess(data) {
            setPoolInfo(data as PoolInfoType);
        },
    },
    );


    return (
            <Link href={`farm/${id}`}>
        <div className="ring-1 ring-slate-200 bg-white rounded-lg">
            <div className='rounded-2xl p-4' >
                <p>Pool token:{poolInfo?.lpToken}</p>
                <p>Allocated Point:{poolInfo?.allocPoint.toString()}</p>
                <p>Last Reward Block:{poolInfo?.lastRewardBlock.toString()}</p>
                <p>Accumulated Axora Reward:{poolInfo?.accAxoraReward.toString()}</p>
                <p>Total Depositors:{poolInfo?.totalDepositors.toString()}</p>
            </div>
        </div>
        </Link>
    )
}