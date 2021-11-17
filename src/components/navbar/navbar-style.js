import { styled, alpha } from "@mui/material/styles";
import { Container } from '@mui/material';
import { Link } from "react-router-dom";

export const style = (function () {
    const Wrapper = styled(Container)(({ theme }) => ({
        height: "60px",
        background: theme.palette.mode === "light" ? "#fff" : "#383838",
        borderBottom: `1px solid ${
          theme.palette.mode === "light"
            ? alpha(theme.palette.common.black, 0.15)
            : alpha(theme.palette.common.white, 0.15)
        }  `,
        color: theme.typography.text,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "0",
          paddingRight: "0",
        },
      }));

      const Logo = styled(Link)(({ theme }) => ({
        textDecoration: "none",
        h3: {
          fontFamily: "Bungee !important",
          fontSize: "30px",
          textTransform: "uppercase",
          fontWeight: "bold",
          [theme.breakpoints.down("sm")]: {
            fontSize: "25px",
          },
        },
      }));
  return { Wrapper, Logo};
  
})();
