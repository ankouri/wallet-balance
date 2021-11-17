import { styled } from "@mui/material/styles";
import { Container } from '@mui/material';


export const style = (function () {
    const Wrapper = styled(Container)(({ theme }) => ({
        width:'100%',
        height:'100%',
        background:'#8383838f',
        position:'absolute',
        left:0,
        top:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'25px',
        zIndex:'6666',
    
    }));
  return { Wrapper };
  
})();
