import React from "react";
import { useSelector } from "react-redux";
import Loading from "../loading/loading";
import { style } from "./general-style";
import { ArrowForwardIos } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const nFormatingNumber = (num, digits) => {
  const mookUp = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = mookUp
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });

  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};


export default function Generale() {
  const wallet = useSelector((state) => state.wallet.value);
  const navigate = useNavigate();

  return (
    <style.Wrapper>
      {wallet.loading && <Loading />}
      <style.Card sx={{ background: "#0088FE" }}>
        <h3>{wallet.erc20Assets.length}</h3>
        <span>Total Tokens</span>
      </style.Card>
      <style.Card sx={{ background: "#FFBB28" }}>
        <h3>
          {wallet.wallettnxs.length === 0
            ? wallet.wallettnxs.length
            : nFormatingNumber(wallet.wallettnxs.total, 1)}
        </h3>
        <span>Total Transactions</span>
      </style.Card>
      <style.Card sx={{ background: "#00C49F" }}>

        {wallet.nfts.length !== 0 && wallet.nfts.total !== 0 ? (
          <Tooltip disableFocusListener disableTouchListener title="View More">
            <style.ViewMore onClick={() =>{navigate('/nfts')} }>
              <ArrowForwardIos />
            </style.ViewMore>
          </Tooltip>
        ) : (
          ""
        )}

        <h3>
          {wallet.nfts.length === 0 ? wallet.nfts.length : wallet.nfts.total}
        </h3>

        <span>Total NFTs</span>
      </style.Card>
    </style.Wrapper>
  );
}


