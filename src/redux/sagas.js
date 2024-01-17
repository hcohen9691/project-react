import { all, call, put, takeLatest } from 'redux-saga/effects'
import { initResponse, doFetchResponseFailure } from './actions'


function* getResponseAsync() {
    try {
        // const response = yield call(() => axios.get('../data/response.json'))
        const response = yield call(() => require('../data/response.json'))
        yield put(initResponse(response));
    }
    catch (error) {
        yield put(doFetchResponseFailure(error.message));
    }
}

function* watchGetResponseAsync() {
    yield takeLatest('GET_RESPONSE_ASYNC', getResponseAsync)
}

export function* rootSaga() {
    yield all([watchGetResponseAsync()])
}