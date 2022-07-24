/*
export const getSingleCinemaVideo = (cinema_type, cinema_id) => async (dispatch) => {

    dispatch({
        type: LOADING_TRUE
    });

    try {

        const res = await axios.get(`${PATH_NAME}/${cinema_type}/${cinema_id}/videos?api_key=${APIKey}&language=en-US`);

        dispatch({
            type: GET_SINGLE_CINEMA_VIDEO,
            payload: res.data
        });


    } catch (err) {
        dispatch({
            type: LOADING_FALSE
        })
    }
};

export const getSingleCinemaCredits = (cinema_type, cinema_id) => async (dispatch) => {

    dispatch({
        type: LOADING_TRUE
    });

    try {

        const res = await axios.get(`${PATH_NAME}/${cinema_type}/${cinema_id}/credits?api_key=${APIKey}&language=en-US`);

        dispatch({
            type: GET_SINGLE_CINEMA_CREDITS,
            payload: res.data
        });


    } catch (err) {
        dispatch({
            type: LOADING_FALSE
        })
    }
};*/
import {
    GET_CATEGORY, GET_IMG_SCALED,
    GET_PRODUCTS,
    LOADING_FALSE,
    LOADING_TRUE,
    SEARCH_VAL,
    SELECT_CHANGE_VAL, SELECTED_IMAGE,
    SHOW_SEARCH_RESULT,
    SHOW_SELECT_CHANGE_VAL, SINGLE_CONTENT
} from "../actionTypes/actionTypes";
import axios from "axios";
import {PATH_NAME} from "../../tools/constant";

export const getProducts = (page) => async (dispatch) => {

    dispatch({
        type: LOADING_TRUE
    });

    try {

        const res = await axios.get(`${PATH_NAME}/api/product?limit=3&offset=${page * 3 - 3}`);

        console.log(res)
        dispatch({
            type: GET_PRODUCTS, payload: res.data
        });


    } catch (err) {
        dispatch({
            type: LOADING_FALSE
        })
    }
};
export const getCategory = () => async (dispatch) => {

    try {

        const res = await axios.get(`${PATH_NAME}/api/category`);
        dispatch({
            type: GET_CATEGORY, payload: res.data
        });


    } catch (err) {
        dispatch({
            type: LOADING_FALSE
        })
    }
};
export const getChangeVal = (selectChangeVal, searchVal, page) => async (dispatch) => {
    dispatch({
        type: LOADING_TRUE
    });

    dispatch({
        type: SELECT_CHANGE_VAL, payload: selectChangeVal
    });
    try {

        const res = await axios.get(`${PATH_NAME}/api/product?name=${searchVal}&category=${selectChangeVal}&limit=3`);
        // &limit=5&offset=${page*3-3}
        dispatch({
            type: SHOW_SELECT_CHANGE_VAL, payload: res.data
        });


    } catch (err) {
        dispatch({
            type: LOADING_FALSE
        })
    }

};
export const getSearchVal = (searchVal, selectChangeVal, page) => async (dispatch) => {
    dispatch({
        type: LOADING_TRUE
    });

    dispatch({
        type: SEARCH_VAL, payload: searchVal
    });

    if (selectChangeVal === '') {
        try {

            const res = await axios.get(`${PATH_NAME}/api/product?name=${searchVal}&limit=3`);
            dispatch({
                type: SHOW_SEARCH_RESULT, payload: res.data
            });


        } catch (err) {
            dispatch({
                type: LOADING_FALSE
            })
        }
    } else {
        const res1 = await axios.get(`${PATH_NAME}/api/product?name=${searchVal}&category=${selectChangeVal}`);
        dispatch({
            type: SHOW_SELECT_CHANGE_VAL, payload: res1.data
        });
    }


};
export const SelectImg = (selectedImage) => async (dispatch) => {
    /*    dispatch({
            type: LOADING_TRUE
        });*/

    dispatch({
        type: SELECTED_IMAGE, payload: selectedImage
    });


};
export const getSingleContent = (id) => async (dispatch) => {
    dispatch({
        type: LOADING_TRUE
    });

    try {

        const res = await axios.get(`${PATH_NAME}/api/product/${id}`);
        dispatch({
            type: SINGLE_CONTENT, payload: res.data
        });

    } catch (err) {
        dispatch({
            type: LOADING_FALSE
        })
    }


};

/*export const getImgScaled = (id) => async (dispatch) => {
    dispatch({
        type: LOADING_TRUE
    });

    try {

        const res = await axios.get(`${PATH_NAME}/api/product/${id}`);
        dispatch({
            type: GET_IMG_SCALED,
            payload: res.data
        });
        console.log(res.data)


    } catch (err) {
        dispatch({
            type: LOADING_FALSE
        })
    }

};*/
