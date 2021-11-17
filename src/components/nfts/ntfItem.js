import React from 'react'
import { style } from './nft-style';

export default function NtfItem(props) {
    const { nft } = props;
    return (
        <style.Wrapper>
            <style.ItemWrapper>
            <style.Item>
                <style.ItemTitle>Name :</style.ItemTitle>
                <style.ItemValue>{ nft.name }</style.ItemValue>
            </style.Item>
            <style.Item>
                <style.ItemTitle>Amount :</style.ItemTitle>
                <style.ItemValue>{ nft.amount }</style.ItemValue>
            </style.Item>
            <style.Item>
                <style.ItemTitle>Owner :</style.ItemTitle>
                <style.ItemValue>{ nft.owner_of }</style.ItemValue>
            </style.Item>
            <style.Item>
                <style.ItemTitle>Token Address :</style.ItemTitle>
                <style.ItemValue>{ nft.token_address }</style.ItemValue>
            </style.Item>
            <style.Item>
                <style.ItemTitle>Contract Type :</style.ItemTitle>
                <style.ItemValue>{ nft.contract_type }</style.ItemValue>
            </style.Item>
            <style.Item>
                <style.ItemTitle>Symbol :</style.ItemTitle>
                <style.ItemValue>{ nft.symbol }</style.ItemValue>
            </style.Item>
            </style.ItemWrapper>
        </style.Wrapper>
    )
}
