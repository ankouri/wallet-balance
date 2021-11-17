import React from 'react';
import { useSelector } from "react-redux";
import NtfItem from './ntfItem';

export default function Nfts() {
    const wallet = useSelector((state) => state.wallet.value);

    return (
        <div>
            {
                wallet.nfts.length !== 0 ? 
                <>
                {
                    wallet.nfts.result.map((item, key) => {
                        return <NtfItem nft={ item } key={ key }/>
                    })
                }
                </>
                :''
            }
        </div>
    )
}
