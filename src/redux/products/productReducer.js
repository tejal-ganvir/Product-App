import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILED,
    FETCH_PRODUCTS_DETAILS,
    FETCH_PRODUCTS_DETAILS_SUCCESS,
    FETCH_PRODUCTS_DETAILS_FAILED,
    SET_PAGE_NUM,
} from './types';

const INIT_STATE = {
    data: [],
    loading: false,
    page: 1,
    hasMore: true,
    details: [],
    productLoading: false
};

const Product = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, loading: true };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, data: action.payload.data, hasMore: action.payload.hasMore, loading: false, error: null };
        case FETCH_PRODUCTS_FAILED:
            return { ...state, error: action.payload, loading: false };
        case SET_PAGE_NUM:
            return { ...state, page: action.payload };
        case FETCH_PRODUCTS_DETAILS:
            return { ...state, id: action.payload, productLoading: true };
        case FETCH_PRODUCTS_DETAILS_SUCCESS:
            return { ...state, details: action.payload, productLoading: false, error: null };
        case FETCH_PRODUCTS_DETAILS_FAILED:
            return { ...state, error: action.payload, productLoading: false };
        default:
            return { ...state };
    }
};

export default Product;