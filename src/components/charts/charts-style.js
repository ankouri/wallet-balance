import { styled } from "@mui/material/styles";
import { globalStyle } from "../commun-style";
import { Typography, Alert } from "@mui/material";

export const style = (function () {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "19px",
    fontWeight: "bold",
    marginTop: "2px",
    color: `${theme.typography.text} !important`,
  }));
  const Legends = styled("div")(({ theme }) => ({
    span: {
      width: "15px",
      height: "15px",
      display: "inline-block",
      marginLeft: "8px",
    },
  }));

  const Erc20 = styled("span")(({ theme }) => ({
    background: "#0088FE",
  }));
  const Erc720 = styled("span")(({ theme }) => ({
    background: "#FFBB28",
  }));

  const Wrapper = globalStyle.Wrapper;

  const BoxsWrapper = styled('div')(({ theme }) =>({

    marginTop:'8px',
    marginBottom:'8px',

  }));

  const Box = styled(Alert)(({ theme }) =>({
    background:theme.palette.background.default,
    // paddingLeft:'10px',
    [theme.breakpoints.down("sm")]: {
      width:'98%',
      display:'flex',
      margin:'0 auto'
    },
  }));

  return {Box, BoxsWrapper, Erc20, Erc720, Legends, Wrapper, Title };
})();
