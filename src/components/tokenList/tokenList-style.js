import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
export const style = (function () {
  const Wrapper = styled(Container)(({ theme }) => ({
    background: theme.palette.mode === "light" ? "#fff" : "#383838",
    marginTop: "4px",
    height: "600px",
    width: "100%",
    color: theme.typography.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    scrollbarWidth: "2px !important",
    scrollbarColor: "white",
  }));

  return { Wrapper };
})();
