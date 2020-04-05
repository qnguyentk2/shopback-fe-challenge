import { BRANCHES_TYPE } from "../constType";
import categoriesIcons from '../mockData/categories-icon.json';
import get from 'lodash/get';

const initialState = {
  loading: false,
  stores: [],
  categories: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BRANCHES_TYPE.FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case BRANCHES_TYPE.FETCH_SUCCESS:
      const categories = get(action, 'payload.categories', []);
      // add icon to each item
      if (categories.length > 0) {
        categories.forEach((element, index) => {
          element.categoryUrl = categoriesIcons[index];
        });
      }
      return {
        ...state,
        loading: false,
        categories,
        stores: get(action, 'payload.stores', []),
        error: null
      };
    case BRANCHES_TYPE.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
