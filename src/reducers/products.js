import {
    FETCH_SINGLE_PRODUCT,
    CHANGE_CURRENCY,
    RECEIVE_PRODUCTS,
    RECEIVE_CATEGORY
} from "../constants/ActionTypes";


const initialState = {
    products: [],
    symbol: '₹',
    product_details: [],
    categories: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                products: action.products
            };

        case FETCH_SINGLE_PRODUCT:
            if (state.products.findIndex(product => product.id === action.productId) !== -1) {
                const singleItem = state.products.reduce((itemAcc, product) => {
                    return product
                }, [])
                return {
                    ...state,
                    product_details: singleItem
                };
            }

        case CHANGE_CURRENCY:
            return {
                ...state,
                symbol: action.symbol
            };

        case RECEIVE_CATEGORY:
            return {
                ...state,
                categories: action.categories
            };

        default:
            return state;
    }
};
export default productReducer;