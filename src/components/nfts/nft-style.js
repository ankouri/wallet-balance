import { styled } from "@mui/material/styles";
import { globalStyle } from "../commun-style";

export const style = (function () {

  const Wrapper = globalStyle.Wrapper;
  const ItemWrapper = styled('div')(({ theme }) => ({
   paddingTop:'5px',
   paddingBottom:'5px',
   borderBottom:'2px solid #ddd',
  }));
  const Item = styled('div')(({ theme }) => ({
    borderBottom:'1px solid #ddd',
    padding:'6px',
    display:'flex',
    justifyContent:'start',
    alignItems:'center',
  }));
  const ItemTitle = styled('div')(({ theme }) => ({
    width:'15%',
    textAlign:'left',
    fontSize:'20px',
  }));

  const ItemValue = styled('div')(({ theme }) => ({
    textAlign:'center',
    fontSize:'20px',
  }));
  return { Wrapper,Item, ItemWrapper, ItemTitle, ItemValue };
  
})();
