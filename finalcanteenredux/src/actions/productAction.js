import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST } from '../constants/productConstants';
import axios from 'axios';
import Axios from 'axios';
 

const listProductsMe = () => async (dispatch) => {
	try{
		dispatch({ type: PRODUCT_LIST_REQUEST });
		const {data} = await axios.get("/api/meproducts");
;
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	}
	catch(error) {
		dispatch({ type: PRODUCT_LIST_FAILURE, payload: error.message });
		console.log(error);
	}
}

const listProductsCsit = () => async (dispatch) => {
	try{
		dispatch({ type: PRODUCT_LIST_REQUEST });
		const {data} = await axios.get("/api/csitproducts");
;
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	}
	catch(error) {
		dispatch({ type: PRODUCT_LIST_FAILURE, payload: error.message });
		console.log(error);
	}
}

const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get('/api/meproducts/' + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    const { userSignin: { userInfo } } = getState();
    if (!product._id) {
      const { data } = await Axios.post('/api/meproducts', product, {
        headers: {
          'Authorization': 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.put('/api/meproducts/' + product._id, product, {
        headers: {
          'Authorization': 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }

  } catch (error) {

    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
}

const deleteProdcut = (productId) => async (dispatch, getState) => {
  try {
    const { userSignin: { userInfo } } = getState();
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
    const { data } = await axios.delete("/api/meproducts/" + productId, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token
      }
    });
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });

  }
}

 
export { listProductsMe, listProductsCsit, detailsProduct, deleteProdcut, saveProduct }