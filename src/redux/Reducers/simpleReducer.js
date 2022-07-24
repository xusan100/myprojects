/*Switch Case*/

import {
    GET_CATEGORY, GET_IMG_SCALED,
    GET_PRODUCTS,
    LOADING_FALSE,
    LOADING_TRUE,
    SEARCH_VAL,
    SELECT_CHANGE_VAL, SELECTED_IMAGE, SHOW_SEARCH_RESULT, SHOW_SELECT_CHANGE_VAL, SINGLE_CONTENT
} from "../actionTypes/actionTypes";
import singleContent from "../../components/SingleContent/SingleContent";

const initialState = {
    products: [],
    category: [],
    selectChangeVal: "",
    searchVal: "",
    totalNumberOfPAges:"",
    imgScaled:null,
    selectedImg:null,
    singleContent:[],
/*    brand:null,
    categoryOfSelectedProduct:null,
    description:null,
    discountPercentage:null,
    pricing:null,
    rating:null,
    stock:null,
    thumbnail:null,
    title:null,*/
    loading: false,

}


export const simpleReducer = (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case LOADING_TRUE:
            return {
                ...state, loading: true,

            }
        case LOADING_FALSE:
            return {
                ...state, loading: false,

            }
        case GET_PRODUCTS:

            return {
                ...state,
                products: payload.products,
                totalNumberOfPAges: Math.ceil(payload.count/3),
                loading: false,

            }
        case GET_CATEGORY:

            return {
                ...state,
                category: payload,
                loading: false,

            }
        case SELECT_CHANGE_VAL:

            return {
                ...state,
                selectChangeVal: payload,
                totalNumberOfPAges: Math.ceil(payload.count),
                loading: false,

            }
        case SEARCH_VAL:

            return {
                ...state,
                searchVal: payload,
                loading: false,

            }
        case SHOW_SEARCH_RESULT:

            return {
                ...state,
                products: payload.products,
                totalNumberOfPAges: Math.ceil(payload.count/3),
                loading: false,

            }
        case SHOW_SELECT_CHANGE_VAL:

            return {
                ...state,
                products: payload.products,
                totalNumberOfPAges: Math.ceil(payload.count/3),
                loading: false,

            }
        case SELECTED_IMAGE:

            return {
                ...state,
                selectedImg: payload.thumbnail,
                /*brand:payload.brand,
                categoryOfSelectedProduct:payload.category,
                description:payload.description,
                discountPercentage:payload.discountPercentage,
                pricing:payload.price,
                rating:payload.rating,
                stock:payload.stock,
                thumbnail:payload.thumbnail,
                title:payload.title,*/
                loading: false,
            }
        case SINGLE_CONTENT:

            return {
                ...state,
                singleContent: payload,
                loading: false,
            }


       /* case GET_IMG_SCALED:

            return {
                ...state,
                imgScaled: payload,
                loading: false,

            }*/

        default:
            return state;
    }
}
