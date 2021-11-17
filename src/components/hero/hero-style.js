import { styled, alpha } from "@mui/material/styles";
import { globalStyle } from "../commun-style";
import { InputBase, Container, Typography, FormControl } from "@mui/material";

export const style = (function () {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      margin: "8px auto",
      borderRadius: 4,
      position: "relative",
      backgroundColor: alpha(theme.palette.background.paper, 0.15),
      border: `1px solid ${
        theme.palette.mode === "light"
          ? alpha(theme.palette.common.black, 0.15)
          : alpha(theme.palette.common.white, 0.15)
      }`,
      fontSize: 16,
      padding: "16px 26px 15px 15px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: theme.typography.fontFamily,
    },
    svg: {
      color: theme.typography.text,
    },
  }));

  const Input = globalStyle.TextFieldInput;

  const Wrapper = styled(Container)(({ theme }) => ({
    height: "300px",
    background: theme.palette.mode === "light" ? "#fff" : "#383838",
    marginTop: "4px",
    borderBottom: `1px solid ${
      theme.palette.mode === "light"
        ? alpha(theme.palette.common.black, 0.15)
        : alpha(theme.palette.common.white, 0.15)
    }`,
    color: theme.typography.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      height: "350px",
    },
  }));

  const Vector = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
  }));

  const Title = styled(Typography)(({ theme }) => ({
    width: "100%",
    margin: "0 auto",
    fontSize: "30px",
    textAlign: "center",
    b: {
      fontWeight: "bold",
      color: theme.palette.secondary,
    },
  }));

  const Desc = styled(Typography)(({ theme }) => ({
    marginLeft: "50px",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
  }));

  const Form = styled("form")(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }));
 
  const Line = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));
  const InputWrapper  = styled(FormControl)(({ theme }) => ({
    width: "65%",
    marginRight: "4px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: "0px",
    },
  }));
  const SelectWrapper = styled(FormControl)(({ theme }) => ({
    width: "25%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }}));
    const Button = globalStyle.CsButton;
  return { Button, SelectWrapper, InputWrapper, Line, Form, Desc, Title, Input, BootstrapInput, Wrapper, Vector };
})();
