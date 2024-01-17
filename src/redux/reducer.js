const initialState = {
    response: []
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RESPONSE_ASYNC': {
            return {
                ...state,
                response: action.payload
            }
        }
        case 'GET_RESPONSE': {
            return {
                ...state,
                response: [...action.payload.results]
            }
        }
        case 'UPDATE_RESPONSE': {
            return {
                ...state,
                response: action.payload
            }
        }
        case 'FETCH_RESPONSE_FAILURE': {
            return {
              ...state,
              response: {},
              error: action.payload,
            };
          }
        default:
            return state
    }
}

export default rootReducer
