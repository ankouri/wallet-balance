import React from "react";
import {
  Grid,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/features/options";
import { useMoralisWeb3Api } from "react-moralis";
import { style } from './hero-style';
import { erc20Assets, trnxs } from '../../constants';
const blockchainList = [
  { name: "Ethereum Mainnet", symbol: "eth" },
  { name: "Ropsten (Eth Testnet)", symbol: "ropsten" },
  { name: "Rinkey (Eth Testnet)", symbol: "rinkeby" },
  { name: "Goerli (Eth Testnet)", symbol: "goerli" },
  { name: "Kovan (Eth Testnet)", symbol: "kovan" },
  { name: "Binance Smart Chain Mainnet", symbol: "bsc" },
  { name: "Binance Smart Chain Testnet", symbol: "bsc testnet" },
  { name: "Polygon (Matic) Mainnet", symbol: "matic" },
  { name: "Mumbai (Matic Testnet)", symbol: "mumbai" },
  { name: "Avalanche Mainnet", symbol: "avalanche" },
];
export default function Hero() {
  const [chain, setChain] = React.useState("");
  const [address, setAddress] = React.useState("");
  const dispatch = useDispatch();
  const { account } = useMoralisWeb3Api();

  const handleSearchQuery = async (e) => {
    e.preventDefault();
    dispatch(
      setData({
        chain: chain,
        address: address,
        erc20Assets: erc20Assets,
        wallettnxs: trnxs,
        nfts: [],
        loading: true,
      })
    );

    const opts = {
      chain: chain,
      address: address,
    };

    //FETCH TOKENS BALANCE
    let tokens = [];
    try{
     tokens = await account.getTokenBalances(opts);
    }catch(e){
    }
    //FETCH TRANSACTIONS
    let tnxs = [];
    try{
      tnxs = await account.getTransactions(opts);
    }catch(e){
    }
    //FETCH NFTS
    let nfts = [];
    try {
      nfts = await account.getNFTs(opts);
    } catch (e) {
    }
    //FETCH TOTAL PRICE USD


    dispatch(
      setData({
        chain: chain,
        address: address,
        erc20Assets: tokens,
        wallettnxs: tnxs,
        nfts: nfts,
        loading: false,
      })
    );
  };

  const handleChangeChain = (e) => {
    setChain(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <style.Wrapper>
      <Grid container>
        <Grid
          item
          md={8}
          sm={12}
          xs={12}
          sx={{
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
          }}
        >
          <style.Title variant="h4" component="h2">
            Visualize your <b>assets</b>
          </style.Title>
          <style.Desc variant="h6" component="h2">
            Informations that you don't see
          </style.Desc>
          <style.Form onSubmit={handleSearchQuery}>
            <style.Line>
              <style.InputWrapper>
                <FormHelperText>Wallet Address</FormHelperText>
                <style.Input
                  type="text"
                  id="walletID"
                  variant="outlined"
                  fullWidth
                  value={address}
                  onChange={handleChangeAddress}
                  required
                  placeholder="Wallet Address"
                  inputProps={{
                    maxLength: 50,
                  }}
                />
              </style.InputWrapper>
              <style.SelectWrapper>
                <FormHelperText>Select Chain</FormHelperText>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={chain}
                  onChange={handleChangeChain}
                  required
                  placeholder="Select Chain"
                  input={<style.BootstrapInput />}
                >
                  <MenuItem value={"0"}>
                    <em>Select Chain</em>
                  </MenuItem>
                  {blockchainList.map((item, key) => {
                    return (
                      <MenuItem value={item.symbol} key={key}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </style.SelectWrapper>
            </style.Line>
            <style.Button
              type="submit"
              sx={{ width: "30%", mt: "10px" }}
              variant="outlined"
            >
              Get Statred
            </style.Button>
          </style.Form>
        </Grid>
        <Grid item md={4} sx={{ display: { md: "block", xs: "none" } }}>
          <style.Vector src="/hero.svg" alt="" />
        </Grid>
      </Grid>
    </style.Wrapper>
  );
}








