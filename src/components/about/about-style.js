import { styled } from "@mui/material/styles";
import { globalStyle } from "../commun-style";

export const style = (function () {

  const Text = globalStyle.Text;

  const Image = globalStyle.Image;

  const Vector = styled(globalStyle.Vector)(({ theme }) => ({
    width: "40%",
  }));

  const InfoTitle = globalStyle.InfoTitle;

  const  Info = globalStyle.Info;

  const Wrapper = globalStyle.Wrapper;

  return { Text,Wrapper, Info, InfoTitle, Vector, Image };
  
})();
