import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILED,
    FETCH_PRODUCTS_DETAILS,
    FETCH_PRODUCTS_DETAILS_SUCCESS,
    FETCH_PRODUCTS_DETAILS_FAILED,
    SET_PAGE_NUM,
} from './types';

export const fetchProducts = (page, data) => ({
    type: FETCH_PRODUCTS,
    payload: {page, data},
});

export const fetchProductsSuccess = (data, hasMore) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {data, hasMore},
});

export const fetchProductsFailed = (error) => ({
    type: FETCH_PRODUCTS_FAILED,
    payload: error,
});

export const setPageNum = (page) => ({
    type: SET_PAGE_NUM,
    payload: page + 1,
});

export const fetchProductDetails = (id) => ({
    type: FETCH_PRODUCTS_DETAILS,
    payload: id,
});

export const fetchProductDetailsSuccess = (details) => ({
    type: FETCH_PRODUCTS_DETAILS_SUCCESS,
    payload: details,
});

export const fetchProductDetailsFailed = (error) => ({
    type: FETCH_PRODUCTS_DETAILS_FAILED,
    payload: error,
});