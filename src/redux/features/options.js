import { createSlice } from "@reduxjs/toolkit";
import { erc20Assets, trnxs} from './../../constants';
export const walletsSlice = createSlice({
    name:'wallet',
    initialState:{
        value:{
            chain:'bsc',
            address:'0xcA3751dCad78cE9Fdbfa37f17DD464eF2AEcE863',
            erc20Assets:erc20Assets,
            wallettnxs:trnxs,
            nfts:[],
            loading:false,
        }
    },
    reducers:{
        setData:(state, action) =>{
            state.value = action.payload
        },

        
    }
});

export const { setData } = walletsSlice.actions;

export default walletsSlice.reducer;