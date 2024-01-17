const initResponseAsync = () => {
    return {
        type: 'GET_RESPONSE_ASYNC'
    }
};

const initResponse = (response) => {
    return {
        type: 'GET_RESPONSE',
        payload: response
    }
}

const updateResponse = (response) => {
    return {
        type: 'UPDATE_RESPONSE',
        payload: response
    }
}

const doFetchResponseFailure = (error) => {
    return {
      type: 'FETCH_RESPONSE_FAILURE',
      payload: error,
    };
};


export { initResponseAsync, initResponse, updateResponse, doFetchResponseFailure }