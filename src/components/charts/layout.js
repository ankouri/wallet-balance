import React from "react";
import { Grid, Divider } from "@mui/material";
import ChartTxt from "./tnxChart";
import ERC20Chart from "./erc20Chart";
import TokensList from "../tokenList/tokensList";
import { style } from "./charts-style";
import TnxsInfo from './tnxsInfo';
import Loading from "../loading/loading";
import { useSelector } from 'react-redux';

export default function Layout() {
  const wallet = useSelector((state) => state.wallet.value);
  return (
    <style.Wrapper>
      {
        wallet.loading ? <Loading/> : ''
      }
        <TnxsInfo/>
      <Grid container spacing={1}>
        <Grid item md={8} xs={12}>
          <style.Title component="h4">Assets Transactions :</style.Title>
          <Divider sx={{ mb: 2 }} />
          <ChartTxt />
        </Grid>
        <Grid item md={4} xs={12}>
          <style.Title component="h4">Contract Type Deminations: </style.Title>
          <Divider sx={{ mb: 2 }} />
          <style.Legends>
            <style.Erc20 /> erc20
            <style.Erc720 /> erc721{" "}
          </style.Legends>
          <ERC20Chart />
        </Grid>
      </Grid>
      <style.Title component="h4">Token List :</style.Title>
      <Divider sx={{ mb: 2 }} />
      <TokensList />

      
    </style.Wrapper>
  );
}
