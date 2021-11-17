import { styled, alpha } from "@mui/material/styles";
import { Container, IconButton } from '@mui/material';


export const style = (function () {


  const Wrapper = styled(Container)(({ theme }) => ({
    position:'relative',
    padding: "6px",
    background: theme.palette.mode === "light" ? "#fff" : "#383838",
    marginTop: "4px",
    borderBottom: `1px solid ${
      theme.palette.mode === "light"
        ? alpha(theme.palette.common.black, 0.15)
        : alpha(theme.palette.common.white, 0.15)
    }`,
    color: theme.typography.text,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  const Card = styled(Container)(({ theme }) => ({
    marginRight: "8px",
    position:'relative',
    marginBottom:'8px',
    border: `1px solid ${
      theme.palette.mode === "light"
        ? alpha(theme.palette.common.black, 0.15)
        : alpha(theme.palette.common.white, 0.15)
    }`,
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.mode === "light" ? "#fff" : "#383838",
    h3: {
      textAlign: "center",
      fontSize: "40px",
    },
    span: {
      fontSize: "19px",
      textAlign: "center",
      display: "block",
    },
  }));

  const ViewMore = styled(IconButton)(({ theme }) => ({
    position:'absolute',
    top:'2px',
    right:'2px',
  }));
  return { Wrapper, Card, ViewMore };
  
})();
