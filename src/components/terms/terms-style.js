import { styled } from "@mui/material/styles";
import { globalStyle } from "../commun-style";

export const style = (function () {
    
  const Text = globalStyle.Text;
  const Vector = styled(globalStyle.Vector)(({ theme }) => ({ width: "40%" }));
  const InfoTitle = globalStyle.InfoTitle;
  const Info = globalStyle.Info;
  const Wrapper = globalStyle.Wrapper;
  const TermsLine = styled("h3")(({ theme }) => ({
    margin: "10px auto",
  }));

  return { TermsLine, Text, Wrapper, Info, InfoTitle, Vector };
})();
