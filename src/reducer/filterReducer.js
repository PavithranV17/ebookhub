export const filterReducer = (state, action) => {

    const {type, payload} = action;

    switch(type){
        case "PRODUCTLIST":
            return { productList: payload.product }
        
        case "SORTBY":
            return { ...state, sortby: payload.sortby}
        
        case "INSTOCK":
            return { ...state, instock: payload.instock}

        case "BESTSELLER":
            return { ...state, bestseller: payload.bestseller}
        
        case "RATINGS":
            return { ...state, ratings: payload.ratings}

        case "CLEARALL":
            return { ...state, bestseller: false, ratings: null, instock: false, sortby: null}

        default:
            throw new Error("No case found");
    }
}
