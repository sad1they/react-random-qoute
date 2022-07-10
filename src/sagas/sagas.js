import {put, call, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import {RANDOM, RANDOM_SUCCESS} from '../actions/actions'

function fetchQuote() {
    return axios({
        method: "get",
        url: "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
    });
}

function* getData() {
    const response = yield call(fetchQuote);
    console.log(response);
    yield put({type: RANDOM_SUCCESS, response});
}

export default function* rootSaga() {
    yield takeEvery(RANDOM, getData);
}