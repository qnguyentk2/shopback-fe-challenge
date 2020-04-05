import { BRANCHES_TYPE } from "../constType";
import axios from 'axios';

// Define action
const urlPath = 'https://gist.githubusercontent.com/poepanda/004af517163df9b539628e9d307e5d76/raw/9fbf3c35f67c9d6e0e85de8b636b6b7a2f2952bf';

export const actFetchBranchesData = () => (dispatch) => {
  dispatch({ type: BRANCHES_TYPE.FETCH_REQUEST });
  return axios.get(`${urlPath}/categories-and-stores.json`)
    .then((res) => {
      const { data } = res;
      console.log('res: ', res);
      dispatch({
        type: BRANCHES_TYPE.FETCH_SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: BRANCHES_TYPE.FETCH_FAILURE,
        payload: err,
      });
    });
};

