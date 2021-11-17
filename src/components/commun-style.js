import { Container, TextField, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const globalStyle = (function () {
  const Wrapper = styled(Container)(({ theme }) => ({
    padding: "2px",
    background: theme.palette.mode === "light" ? "#fff" : "#383838",
    marginTop: "4px",
    borderBottom: `1px solid ${
      theme.palette.mode === "light"
        ? alpha(theme.palette.common.black, 0.15)
        : alpha(theme.palette.common.white, 0.15)
    }`,
    color: theme.typography.text,

    position: "relative",
    overflow: "hidden",
  }));
  const Info = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
  }));
  const InfoTitle = styled("h3")(({ theme }) => ({
    width: "100%",
    fontSize: "30px",
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "5px",
  }));
  const Vector = styled("img")(({ theme }) => ({
    display: "flex",
    margin: "10px auto",
  }));
  const Image = styled("img")(({ theme }) => ({
    width: "150px",
    height: "150px",
    margin: "10px auto",
    display: "flex",
  }));
  const Text = styled("p")(({ theme }) => ({
    width: "99%",
    margin: "10px auto",
    display: "flex",
    fontSize: "20px",
    alignItems: "center",
    justifyContent: "start",
  }));
  const TextFieldInput = styled(TextField)(({ theme }) => ({
    margin: "8px auto",
    input: {
      color: theme.typography.text,
      fontFamily: theme.typography.fontFamily,
    },
    fieldset: {
      border: `1px solid ${
        theme.palette.mode === "light"
          ? alpha(theme.palette.common.black, 0.15)
          : alpha(theme.palette.common.white, 0.15)
      }`,
    },
    label: {
      color: theme.typography.text,
      fontFamily: theme.typography.fontFamily,
    },
    div: {
      color: theme.typography.text,
      fontFamily: theme.typography.fontFamily,
      background: alpha(theme.palette.background.paper, 0.15),
    },
  }));
  const Form = styled("form")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }));
  const CsButton = styled(Button)(({ theme }) => ({
    width: "30%",
    marginTop: "10px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      marginTop: "3px",
    },
  }));
  
  return {
    Form,
    Wrapper,
    Info,
    InfoTitle,
    Vector,
    Image,
    Text,
    TextFieldInput,
    CsButton,
  };
})();
