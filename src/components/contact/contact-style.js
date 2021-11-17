import { styled } from "@mui/material/styles";
import { globalStyle } from "../commun-style";

export const style = (function () {
  const Input = globalStyle.TextFieldInput;
  const Wrapper = globalStyle.Wrapper;
  const Form = styled(globalStyle.Form)(({ theme }) => ({
    width: "90%",
    margin: "0 auto",
  }));
  const FormControl = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  const Button = globalStyle.CsButton;
  const Link = styled(Button)(({ theme }) => ({
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      marginBottom: "10px",
    },
  }));
  const LinkWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));
  const InfoTitle = globalStyle.InfoTitle;
  const Info = globalStyle.Info;
  const Vector = styled(globalStyle.Vector)(({ theme }) => ({
    width: "65%",
  }));
  return {
    Vector,
    Info,
    InfoTitle,
    LinkWrapper,
    Link,
    Input,
    Wrapper,
    Form,
    FormControl,
    Button,
  };
})();
