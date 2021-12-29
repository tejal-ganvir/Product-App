import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { FETCH_PRODUCTS, FETCH_PRODUCTS_DETAILS } from './types';
import {
    fetchProductsSuccess,
    fetchProductsFailed,
    fetchProductDetailsSuccess,
    fetchProductDetailsFailed
} from './productActions';
import { fetchJSON } from '../../helpers/api';

/**
 * Sets the session
 * @param {*} user
 */
/**
 * Login the user
 * @param {*} payload - username and password
 */
 function* fetchproductsSaga({ payload: { page , data} }) {
    try {
        const response = yield call(fetchJSON,'https://fakestoreapi.com/products?sort=desc');
        yield put(fetchProductsSuccess(response, false));
    } catch (error) {
        yield put(fetchProductsFailed(error));
    }
}

function* fetchproductDetailsSaga( { payload : id }) {
    try {
        const response = yield call(fetchJSON,'https://fakestoreapi.com/products/'+id);
        yield put(fetchProductDetailsSuccess(response, false));
    } catch (error) {
        yield put(fetchProductDetailsFailed(error));
    }
}

export function* watchFetchproducts() {
    yield takeEvery(FETCH_PRODUCTS, fetchproductsSaga);
}

export function* watchFetchproductDetails() {
    yield takeEvery(FETCH_PRODUCTS_DETAILS, fetchproductDetailsSaga);
}


function* productsSaga() {
    yield all([fork(watchFetchproducts), fork(watchFetchproductDetails)]);
}

export default productsSaga;