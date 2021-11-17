import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { style } from "./charts-style";
import { Divider, Grid } from "@mui/material";

const FrequencyAddress = (data) => {
  //ARRAY TO STORE FREQUENCIES OF ELEMENT
  let feq = Array(data.length);
  let visited = -1;

  for (let i = 0; i < data.length; i++) {
    let count = 1;
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].to_address === data[j].to_address) {
        count++;
        feq[j] = visited;
      }
    }
    if (feq[i] !== visited) {
      feq[i] = count;
    }
  }

  let max = feq[0];
  let topList = [];
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < feq.length; i++) {
      if (feq[i + 1] > max) {
        //return index of the max
        max = i;
      }
    }
    topList.push(max);
    feq.splice(max, 1);
  }

  return topList;
};

export default function TnxsInfo() {
  const wallet = useSelector((state) => state.wallet.value);

  const getFrequencyAddress = () => {
    try {
      if (wallet.wallettnxs.total > 100) {
        return wallet.wallettnxs.result[
          FrequencyAddress(wallet.wallettnxs.result)[0]
        ].to_address;
      } else {
        return wallet.wallettnxs.result[
          FrequencyAddress(wallet.wallettnxs.result)[0]
        ].to_address;
      }
    } catch (e) {
      return "Not founded !";
    }
  };

  const getFirstTnxsDate = () => {
    try {
      return moment().from(wallet.wallettnxs.result[0].block_timestamp);
    } catch (e) {
      return "Not Founded !";
    }
  };

  const getLastTnxsDate = () => {
    try {
      return moment().from(
        wallet.wallettnxs.result[wallet.wallettnxs.result.length - 1]
          .block_timestamp
      );
    } catch (e) {
      return "Not Founded !";
    }
  };
  return (
    <>
      {wallet.wallettnxs && wallet.wallettnxs.total ? (
        <>
          <style.Title>General Informations </style.Title>
          <Divider />
          <style.BoxsWrapper>
            <Grid container spacing={2} sx={{ marginBottom: "12px" }}>
              <Grid item md={6} sm={12} xs={12}>
                <style.Box severity="success">
                  <h3>Top Frequency Address :</h3>
                  <div
                    style={{
                      fontSize: "14px",
                      marginLeft: "25px",
                      marginBottom: "-20px",
                      marginTop: "6px",
                    }}
                  >
                    {getFrequencyAddress()}
                  </div>
                  <br />
                </style.Box>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={12} xs={12}>
                    <style.Box severity="success" sx={{ width: "100%" }}>
                      <h3>Last Transaction : </h3>
                      <p
                        style={{
                          fontSize: "18px",
                          textTransform: "capitalize",
                        }}
                      >
                        {getFirstTnxsDate()}
                      </p>
                    </style.Box>
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <style.Box severity="success" sx={{ width: "100%" }}>
                      <h3> First Transaction : </h3>
                      <p
                        style={{
                          fontSize: "18px",
                          textTransform: "capitalize",
                        }}
                      >
                        {getLastTnxsDate()}
                      </p>
                    </style.Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </style.BoxsWrapper>
        </>
      ) : (
        ""
      )}
    </>
  );
}
