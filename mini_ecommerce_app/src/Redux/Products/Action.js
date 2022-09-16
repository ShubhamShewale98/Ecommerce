import axios from "axios";

const handleLoading = () => ({
    type: "IS_LOADING"
})
const handleError = () => ({
    type: "IS_ERROR"
})
const storeData = (payload) => ({

    type: "STORE_DATA",
    payload
})
const storeSingleData = (payload) => ({

    type: "STORE_SINGLE_DATA",
    payload
})
const handleSINGLELoading = () => ({
    type: "SINGLE_IS_LOADING"
})
const handleSingleError = () => ({
    type: "SINGLE_IS_ERROR"
})
const getData = () => async (dispatch) => {
    try {
        dispatch(handleLoading())
        const res = await axios.get("http://localhost:3004/products");

        const data = res.data;
        dispatch(storeData(data))
    }
    catch (e) {
        dispatch(handleError())
    }
};
const getDataSingle = (id) => async (dispatch) => {
    try {
        dispatch(handleLoading())
        const res = await axios.get(`http://localhost:3004/products/${id}`);

        const data = res.data;
        dispatch(storeSingleData(data))
    }
    catch (e) {
        dispatch(handleError())
    }
};
export { storeData, handleLoading, handleError, getData , getDataSingle }