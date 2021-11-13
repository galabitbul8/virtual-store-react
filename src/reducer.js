// define all the application level states and define action to make the changes to the state
export const initialState = {
    basket:[],

}

//selector
export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount,item) => item.price + amount,0));
}

const reducer = (state,action) => {
     switch(action.type){
         case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket, action.item],
            } // return the priveus state
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index,1);
            }else{

            }
            return {
                ...state,
                basket:newBasket
            }
        default:
            return state;
     }
}

export default reducer;