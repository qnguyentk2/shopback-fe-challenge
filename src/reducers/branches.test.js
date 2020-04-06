import reducer from '../reducers/branches';
import * as actions from '../actions/branches';
import { BRANCHES_TYPE } from "../constType";
import expect from 'expect';
import getDataMock from '../mockData/branches.json';

console.log('BRANCHES_TYPE: ', BRANCHES_TYPE);

describe('branch reducer', () => {
  it('should return the initial state', () => {
    const initState = {
      loading: false,
      stores: [],
      categories: [],
      error: null
    }
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should handle BRANCHES_TYPE.FETCH_REQUEST', () => {
    const startAction = {
      type: BRANCHES_TYPE.FETCH_REQUEST
    };
    expect(reducer({}, startAction)).toEqual({ loading: true});
  });

  it('should handle BRANCHES_TYPE.FETCH_SUCCESS', () => {
    const successAction = {
      type: BRANCHES_TYPE.FETCH_SUCCESS,
      payload: getDataMock
    };
    expect(reducer({}, successAction)).toEqual({ ...getDataMock, loading: false, error: null });
  });

  it('should handle BRANCHES_TYPE.FETCH_FAILURE', () => {
    const failAction = {
      type: BRANCHES_TYPE.FETCH_FAILURE,
      error: { success: false },
    };
    expect(reducer({}, failAction)).toEqual({ error: undefined, loading: false, });
  });
});