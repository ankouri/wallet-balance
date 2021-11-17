import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/navbar/navbar";
import { styled } from "@mui/material/styles";
import Hero from "./components/hero/hero";
import Layout from "./components/charts/layout";
import Generale from "./components/general/generale";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Terms from "./components/terms/terms";
import Nfts from "./components/nfts/nfts";

export default function Home(props) {
  const { about, home, contact, terms, nfts } = props;

  return (
    <Wrapper>
      <Navbar />
      {about ? <About /> : ""}
      {home ? (
        <>
          <Hero />
          <Generale />
          <Layout />
        </>
      ) : (
        ""
      )}
      {contact ? <Contact /> : ""}
      {terms ? <Terms /> : ""}
      {nfts ? (
        <>
          <Hero />
          <Generale />
          <Nfts />
        </>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

const Wrapper = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0",
    paddingRight: "0",
  },
}));
