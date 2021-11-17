import React from "react";
import { Grid, Divider } from "@mui/material";
import HowTo from "./howTo";
import { AboutDesc } from "../../constants";
import { style } from "./about-style";

export default function About() {
  return (
    <style.Wrapper>
      <style.Vector src="/about.svg" alt="" />
      <style.Info>
        <style.InfoTitle>About Us</style.InfoTitle>
        <Divider />
        <Grid container>
          <Grid item md={2} sm={2} xs={12}>
            <style.Image src="/aboutLogo.svg" alt="" />
          </Grid>
          <Grid item md={10} sm={11} xs={12}>
            <style.Text
              dangerouslySetInnerHTML={{ __html: AboutDesc }}
            ></style.Text>
          </Grid>
        </Grid>
        <style.InfoTitle>FAQ</style.InfoTitle>
        <Divider />
        <HowTo />
      </style.Info>
    </style.Wrapper>
  );
}
