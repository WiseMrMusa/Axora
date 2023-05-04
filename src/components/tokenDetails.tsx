
import { useState } from "react";
import { type Address, erc20ABI, useContractRead } from "wagmi";

export default function TokenDetails({ address }: { address: Address; }) {
    const [tokenName, setTokenName] = useState<string>();



    useContractRead({
        address,
        abi: erc20ABI,
        functionName: 'name',
        onSuccess(data) {
            setTokenName(data);
        }
    });

    return (
        <>
            <h2 className="text-2xl font-bold">
                {tokenName}
            </h2>
        </>
    );
}