import { filterReducer } from "../reducer";
import { createContext, useContext, useReducer } from "react";

const filterInitialState = {
    productList: [],
    instock: false,
    ratings: null,
    sortby: null,
    bestseller: false,
}

const filterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(filterReducer, filterInitialState);

    function initialproductlist(products){
        dispatch(
            {
                type: "PRODUCTLIST",
                payload: {
                    product: products,
                }
            }
        )
    }

    function bestseller(products){
        return state.bestseller ? products.filter(items => items.best_seller === true) : products;
    }

    function instock(products){
        return state.instock ? products.filter(items => items.in_stock === true) : products;
    }

    function sortby(products){
        if(state.sortby === "lowtohigh"){
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        }
        if(state.sortby === "hightolow"){
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }

        return products;
    }

    function ratings(products){
        if(state.ratings === "4STARSABOVE"){
            return products.filter(items => items.rating >= 4)
        }
        if(state.ratings === "3STARSABOVE"){
            return products.filter(items => items.rating >= 3)
        }
        if(state.ratings === "2STARSABOVE"){
            return products.filter(items => items.rating >= 2)
        }
        if(state.ratings === "1STARSABOVE"){
            return products.filter(items => items.rating >= 1)
        }

        return products;
    }

    const filterProductList = instock(bestseller(sortby(ratings(state.productList))));

    const value = {
        state,
        dispatch,
        productList: filterProductList,
        initialproductlist,
        resetList: filterInitialState
    }

    return (
        <filterContext.Provider value={value}>
            {children}
        </filterContext.Provider>
    )
}

export const useFilter = () => (useContext(filterContext));