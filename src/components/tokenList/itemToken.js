import React from "react";
import { Avatar, TableCell, TableRow, Tooltip, Button } from "@mui/material";
import { useSelector } from 'react-redux';
import Moralis from 'moralis';
import { nFormatingNumber } from './../general/generale';


export default function ItemToken(props) {

  const { token} = props;
  const  wallet  = useSelector((state) => state.wallet.value);

  return (
    <TableRow>
      <TableCell>
        <Avatar src={token.logo || token.name} alt={token.name} />
      </TableCell>
      <TableCell align="left">{token.name}</TableCell>
      <TableCell align="left">{token.symbol}</TableCell>
      <TableCell align="left">{token.decimals}</TableCell>
      <TableCell align="left">{ nFormatingNumber(Moralis.Units.FromWei(token.balance, token.decimals), 1) }</TableCell>
      <TableCell align="left">
      <Tooltip disableFocusListener disableTouchListener title={`View in ${wallet.chain}-scan`}>
        <Button onClick={()=>{ window.open(`${selectUrlExplorer(wallet.chain)}${token.token_address}`, "_blank") }}>View</Button>
      </Tooltip>
      </TableCell>

    </TableRow>
  );
}

const selectUrlExplorer = (chain) => {
  let url;
  switch (chain) {
    case "eth":
      url = "https://etherscan.io/address/";
      break;
    case "ropsten":
      url = "https://ropsten.etherscan.io/address/";
      break;
    case "rinkeby":
      url = "https://rinkeby.etherscan.io/address/";
      break;
    case "goerli":
      url = "https://goerli.etherscan.io/address/";
      break;
    case "kovan":
      url = "https://kovan.etherscan.io/address/";
      break;
    case "bsc":
      url = "https://bscscan.com/address/";
      break;
    case "bsc testnet":
      url = "https://testnet.bscscan.com/address/";
      break;
    case "matic":
      url = "https://polygonscan.com/address/";
      break;
    case "mumbai":
      url = "https://mumbai.polygonscan.com/address/";
      break;
    case "avalanche":
      url = "https://explorer.avax.network/address/";
      break;
    default:
      url = 'null';
      break;
  }
  return url;
};
