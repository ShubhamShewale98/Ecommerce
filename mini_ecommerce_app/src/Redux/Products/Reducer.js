const initState = {
    loading: false,
    error: false,
    singleLoading: false,
    singleError: false,
    products: [],
    single: {},
};

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return { ...state, loading: true };
        case "IS_ERROR":
            return { ...state, loading: false, error: true };
        case "SINGLE_IS_LOADING":
            return { ...state, singleLoading: true, singleError: false };
        case "SINGLE_IS_ERROR":
            return { ...state, singleLoading: false, singleError: true };
        case "STORE_DATA":
            return {
                ...state,
                loading: false,
                error: false,
                products: action.payload,
            };
        case "STORE_SINGLE_DATA":
            return { ...state, loading: false, error: false, single: action.payload };
        default:
            return state;
    }
};

export { productReducer };
