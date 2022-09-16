import * as types from'./../constans/ActionType';

 export const actAddToCart=(product,quantity)=>{
    return{
        type:types.ADD_TO_CATT,
        product,
        quantity
    }
 }