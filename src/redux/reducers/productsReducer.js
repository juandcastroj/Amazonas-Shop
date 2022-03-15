import { typesProducts } from "../types/types";

const initialState = {
    products: []
}

export const productsReducer = ( state = initialState , action ) => {

    switch ( action.type) {
        case typesProducts.add:
        return{
            products: [action.payload]
        } 

        case typesProducts.list: 
        return{
            products: [...action.payload ]
        }
        
        case typesProducts.delete:
            return{
            productoss: state.products.filter(prod => prod.codigo !== action.payload)
            }


        default:
            return   state   
    }
}